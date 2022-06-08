import './profile.less';
import SettingsProfile from './modules/settings';
import { templater } from '../../templater';
import { profileTmpl } from './profile.tmpl';
import Avatar from './modules/avatar';
import BackPanel from './modules/backPanel';
import Control from './modules/control';
import Block from '../../utils/block';
import { compile } from '../../utils/compile';
import { getStore } from '../../actions/auth';
import Router from '../../utils/router/router';
import { RoutePath } from '../../utils/router/route-path';

export class Profile extends Block {
  constructor() {
    super({ tagName: 'div', data: { className: ['profile'] } });
  }

  render(): DocumentFragment {
    const store = getStore();
    if (!store?.state?.auth) {
      this.hide();
      const router = new Router('.root');
      router.go(RoutePath.SIGN_IN);
    }
    const profileContext = {
      backPanel: new BackPanel(),
      avatar: new Avatar(),
      settings: new SettingsProfile(),
      control: new Control(),
    };

    return compile(templater, profileTmpl, profileContext);
  }
}
