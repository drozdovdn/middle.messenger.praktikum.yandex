import EventBus from '../utils/event-bus';
import { Indexed } from './merge';
import set from './set';

//События обновления компонентов
export enum EVENT_UPDATE {
  STORE = 'update_store',
  LIST_CHAT = 'update_list_chat',
  CHAT = 'update_chat',
  CONTROL_CHAT = 'update_control_chat',
  DATA_USER = 'update_data_user',
}

export class Store extends EventBus {
  static _instance: Store;
  static STORE_NAME = 'myAppStore';
  private state: Indexed = {};

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

  public removeState() {
    this.state = {};
    this.emit(EVENT_UPDATE.STORE);
  }

  public set(path: string, value: unknown, event: EVENT_UPDATE = EVENT_UPDATE.STORE) {
    this.state = set(this.state, path, value);
    localStorage.setItem(Store.STORE_NAME, JSON.stringify(this.state));
    // метод EventBus
    this.emit(event);
    return this;
  }
}
