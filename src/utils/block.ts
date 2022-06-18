import EventBus from './event-bus';
import { nanoid } from 'nanoid';
import { isEqualObj } from './isEqualObj';

type BlockProps = {
  data_list?: Record<string, unknown>;
  data_message?: Record<string, unknown>;
  data_socket?: Record<string, unknown>;
  user?: Record<string, unknown>;
  activeSoket?: any;
  className?: string;
  _soket?: any;
  _token?: string;
};

export default class Block<
  P extends Record<string, any> | BlockProps = {
    className: string[];
    auth?: boolean;
    user?: {
      id: number;
      avatar: string;
      first_name: string;
    };
    data_list?: {};
    data_message?: {};
    data_socket?: {
      id: number;
      token: '';
    };
    activeSoket?: WebSocket | null;
    _token?: '';
    _soket?: WebSocket | null;
  }
> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  } as const;

  private _element: HTMLElement | undefined;
  private _meta: {
    tagName?: string;
    props?: P;
  } | null = null;

  public id = nanoid(6);
  public eventBus: () => EventBus;
  props: P;

  public constructor(props: Record<string, any> = { tagName: 'div', data: {} }) {
    const eventBus = new EventBus();
    this._meta = {
      tagName: props.tagName,
      props: props.data,
    };

    this.props = this._makePropsProxy(props.data);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
  }

  private _createResources() {
    const tagName = this._meta?.tagName;
    const className = this.props?.className;
    this._element = tagName ? this._createDocumentElement(tagName) : document.createElement('div');

    if (className?.length) {
      className.forEach((item: string) => {
        this.element && this.element.classList.add(item);
      });
    }
  }

  public init() {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  private _componentDidMount(oldProps: P) {
    this.componentDidMount(oldProps);
  }

  public componentDidMount(oldProps: P) {
    console.log(oldProps);
    //
  }

  private _componentDidUpdate(oldProps: P, newProps: P) {
    // const response = !(oldProps && newProps && isEqualObj(oldProps, newProps));
    // if (!response) {
    //   return;
    // }
    // this._render();
    this.componentDidUpdate(oldProps, newProps);
  }

  public componentDidUpdate(oldProps: P, newProps: P) {
    const response = !(oldProps && newProps && isEqualObj(oldProps, newProps));
    if (!response) {
      return;
    }
    this._render();
  }

  public setProps = (nextProps: P) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
    this.eventBus().emit(Block.EVENTS.FLOW_CDU);
  };

  public get element() {
    return this._element;
  }

  private _render() {
    const fragment = this.render();

    if (!this._element) {
      return;
    }
    this._removeEvents();

    this._element.innerHTML = '';

    this._element.appendChild(fragment);
    this._addEvents();
  }

  // Может переопределять пользователь, необязательно трогать
  public render(): DocumentFragment {
    return new DocumentFragment();
  }

  public getContent() {
    return this.element;
  }

  private _makePropsProxy(props: any): any {
    // Можно и так передать this
    // Такой способ больше не применяется с приходом ES6+
    const self = this;

    return new Proxy(props, {
      get(target: Record<string, unknown>, prop: string) {
        const value: unknown = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target: Record<string, unknown>, prop: any, value: unknown) {
        target[prop] = value;

        self.eventBus().emit(Block.EVENTS.FLOW_CDU, { ...target }, target);
        return true;
      },
      deleteProperty(target: Record<string, unknown>, prop: any) {
        if (prop.indexOf('_') === 0) {
          throw new Error('Нет доступа');
        } else {
          delete target[prop];
          return true;
        }
      },
    });
  }

  private _createDocumentElement(tagName: string) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return document.createElement(tagName);
  }

  private _removeEvents() {
    const events: Record<string, () => void> = (this.props as any).events;

    if (!events) {
      return;
    }

    Object.entries(events).forEach(([event, listener]) => {
      this._element?.removeEventListener(event, listener);
    });
  }

  private _addEvents() {
    const events: Record<string, () => void> = (this.props as any).events;

    if (!events) {
      return;
    }

    Object.entries(events).forEach(([event, listener]) => {
      this._element?.addEventListener(event, listener);
    });
  }
  public show() {
    this.getContent()?.classList.remove('block-hidden');
  }

  public hide() {
    this.getContent()?.classList.add('block-hidden');
  }
}
