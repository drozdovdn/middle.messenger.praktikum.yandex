import Block from '../utils/block';
import { EVENT_UPDATE, Store } from './store';
import { Indexed } from './merge';
import {StoreProps} from "./models";

export const connect = (Component: typeof Block, mapStateToProps: (state: StoreProps) => StoreProps, event: EVENT_UPDATE = EVENT_UPDATE.STORE) => {
  return class extends Component {
    constructor(tag: string, props = {}) {
      const store = new Store();

      super(tag, { ...props, ...mapStateToProps(store.getState()) });
      store.on(event, () => {
        this.setProps({ ...mapStateToProps(store.getState()) });
      });
    }
  };
};
