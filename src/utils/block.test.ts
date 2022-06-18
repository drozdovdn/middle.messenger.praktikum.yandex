import Block from './block';
import { expect } from 'chai';

describe('Block', () => {
  let isComponentRender = false;
  class MyBlock extends Block {
    constructor(props?: any) {
      super({ tagName: 'button', data: { ...props, className: props?.className ? [...props.className, 'testing'] : ['testing'] } });
    }

    render(): DocumentFragment {
      isComponentRender = true;
      const fragment = document.createElement('template');
      fragment.innerHTML = `<div id="test"></div>`;
      return fragment.content;
    }
  }

  it('Create component default props', () => {
    const block = new MyBlock();
    expect(block.props?.className[0]).to.eq('testing');
  });
  it('Create component with custom props', () => {
    const block = new MyBlock({ className: ['custom'] });
    expect(block.props?.className[0]).to.eq('custom');
  });
  it('Component did render', () => {
    expect(isComponentRender).to.eq(true);
  });
});
