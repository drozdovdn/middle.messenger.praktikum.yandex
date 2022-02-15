export type Listener<T extends unknown[] = any[]> = (...args: T) => void;

export default class EventBus<E extends string = string, M extends { [K in E]: unknown[] } = Record<E, any[]>> {
  private listeners: { [key in E]?: Listener<M[E]>[] } = {};

  public on(event: E, callback: Listener<M[E]>) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event]!.push(callback);
  }

  public off(event: E, callback: Listener<M[E]>) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event]!.filter((listener) => listener !== callback);
  }

  public emit(event: E, ...args: M[E]) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event]!.forEach((listener) => {
      listener(...args);
    });
  }
}

// const bus = new EventBus<'click'| 'inputForm', {click: [MouseEvent]; inputForm: [InputEvent]}>()
//
// bus.emit('click', )
