import Router from './router';
import { assert } from 'chai';

describe('Router', () => {
  describe('Router test', () => {
    it('Router must be exists', function () {
      const router = new Router('.root');
      assert.exists(router);
    });
    it('routes must be empty', function () {
      const router = new Router('.root');
      assert.lengthOf(router.routes, 0);
    });
    // it("Router register pages", function () {
    //   const router = new Router("#app");
    //   router
    //     .use("/sign-up", `<div>Sign-up page</div>`)
    //     .use("/sign-in", `<div>Sign-in page</div>`);
    //   assert.lengthOf(router.routes, 2);
    // });
  });
});
