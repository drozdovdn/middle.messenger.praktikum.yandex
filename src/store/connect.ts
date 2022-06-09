import Block from '../utils/block';
import { EVENT_UPDATE, Store } from './store';
import { StoreProps } from './models';

export const connect = (Component: typeof Block, mapStateToProps: (state: StoreProps) => any, event: EVENT_UPDATE = EVENT_UPDATE.STORE) => {
  return class extends Component {
    constructor(props: Record<string, any> = {}) {
      const store = new Store();

      super({ ...props, ...mapStateToProps(store.getState()) });
      store.on(event, () => {
        this.setProps({ ...mapStateToProps(store.getState()) });
      });
    }
  };
};
