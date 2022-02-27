import Block from '../utils/block';
import { Store } from './store';
import { Indexed } from './merge';

export const connect = (Component: typeof Block, mapStateToProps: (state: Indexed) => Indexed) => {
  return class extends Component {
    constructor(tag: string, props = {}) {
      const store = new Store();

      super(tag, { ...props, ...mapStateToProps(store.getState()) });

      store.on(Store.EVENT_UPDATE, () => {
        this.setProps({ ...mapStateToProps(store.getState()) });
      });
    }
  };
};
