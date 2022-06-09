import Router from './router';
import { expect } from 'chai';
import Block from '../block';

describe('Router', () => {
  it('should is singleton', () => {
    const router = new Router('.root');
    expect(new Router('.root')).to.eq(router);
  });

  describe('.use', () => {
    it('should return Router instance', () => {
      const router = new Router('.root');
      const result = router.use('/', class {} as any);
      expect(result).to.eq(router);
    });
  });

  describe('.go', () => {
    it('should render new block', () => {
      class MyBlock extends Block {
        constructor() {
          super();
        }
        render(): DocumentFragment {
          const fragment = document.createElement('template');
          fragment.innerHTML = `<div id="test"></div>`;
          return fragment.content;
        }
      }
      const router = new Router('.root');

      router.use('/test', () => new MyBlock());
      router.go('/test');
      expect(document.getElementById('test')).not.to.be.null;
    });
  });

  describe('Navigate test', () => {
    it('Router initialized and router add', () => {
      class MyBlock extends Block {
        constructor() {
          super();
        }
        render(): DocumentFragment {
          const fragment = document.createElement('template');
          fragment.innerHTML = `<div id="test"></div>`;
          return fragment.content;
        }
      }
      class Page extends MyBlock {}
      class Post extends MyBlock {}
      const router = new Router('.root');
      router
        .use('/block', () => new MyBlock())
        .use('/page', () => new Page())
        .use('/post', () => new Post())
        .start();
      router.go('/block');
      router.go('/page');
      router.go('/post');
      // use '/'
      // use '/test'
      expect(router.routes.length).to.eq(5);
    });
  });
});
