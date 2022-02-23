import { isEqual } from '../isEqual';
import Block from '../block';
import { render } from '../render';

/**
 * Ханит URL и соответствующий ему бло, умеет показывать скрыватьи создавать блоки
 */
export default class Route {
  private _pathname: string;
  private _blockInstance: () => Block;
  private _block: null;
  private _props: unknown;

  constructor(pathname: string, view: () => Block, props: unknown) {
    this._pathname = pathname;
    this._blockInstance = view;
    this._block = null;
    this._props = props;
  }

  public navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  public leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  public match(pathname: string) {
    return isEqual(pathname, this._pathname);
  }

  render() {
    if (!this._block) {
      this._block = this._blockInstance();
      render(this._props.rootQuery, this._block);
      return;
    }
    this._block.show();
  }
}
