import EventBus from '../utils/event-bus';
import { Indexed } from './merge';
import set from './set';

export class Store extends EventBus {
  static EVENT_UPDATE = 'update';
  static _instance: Store;
  private state: Indexed = {};

  constructor() {
    super();

    if (Store._instance) {
      return Store._instance;
    }
    this.state = {};
    Store._instance = this;
  }

  public getState() {
    return this.state;
  }

  public removeState() {
    this.state = {};
    this.emit(Store.EVENT_UPDATE);
  }

  public set(path: string, value: unknown) {
    this.state = set(this.state, path, value);

    // метод EventBus
    this.emit(Store.EVENT_UPDATE);
    // return this;
  }
}
