import Router from './router';
import { expect } from 'chai';

describe('Router', () => {
  beforeEach(() => {
    (global as any).window = {};
  });
  describe('.use', () => {
    it('return instans Router', () => {
      const router = new Router('.root');
      expect(router.use('/', class {} as any)).to.eq(router);
    });
  });
  // describe('.start', () => {});
  // describe('.go', () => {});
  // describe('.back', () => {});
  // describe('.forward', () => {});
});
