import EventBus from '../utils/event-bus';
import set from './set';
import { StoreProps } from './models';

//События обновления компонентов
export enum EVENT_UPDATE {
  STORE = 'update_store',
  DIALOG_WINDOW = 'update_dialog_window',
  LIST_CHAT = 'update_list_chat',
  CHAT = 'update_chat',
  CONTROL_CHAT = 'update_control_chat',
  DATA_USER = 'update_data_user',
  MESSAGES = 'update_messages',
  SETTINGS = 'update_settings',
}

export class Store extends EventBus {
  static _instance: Store;
  static STORE_NAME = 'myAppStore';
  public state: StoreProps = {};

  constructor() {
    super();

    if (Store._instance) {
      return Store._instance;
    }
    const savedState = localStorage.getItem(Store.STORE_NAME);
    this.state = savedState ? JSON.parse(savedState) ?? {} : {};
    Store._instance = this;
  }

  public getState() {
    return this.state;
  }

  public removeAll() {
    this.state = {};
    localStorage.setItem(Store.STORE_NAME, JSON.stringify(this.state));
  }

  public removeState(path: string, event: EVENT_UPDATE = EVENT_UPDATE.STORE) {
    // @ts-ignore
    delete this.state[path];
    this.emit(event);
    localStorage.setItem(Store.STORE_NAME, JSON.stringify(this.state));
  }

  public set(path: string, value: unknown, event: EVENT_UPDATE = EVENT_UPDATE.STORE) {
    this.state = set(this.state, path, value);
    localStorage.setItem(Store.STORE_NAME, JSON.stringify(this.state));
    // метод EventBus
    this.emit(event);
    return this;
  }
}
