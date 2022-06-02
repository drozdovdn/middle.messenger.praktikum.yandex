import './profile.less';
import SettingsProfile from './modules/settings';
import { templater } from '../../templater';
import { profileTmpl } from './profile.tmpl';
import Avatar from './modules/avatar';
import BackPanel from './modules/backPanel';
import Control from './modules/control';
import Block from '../../utils/block';
import { compile } from '../../utils/compile';

export class Profile extends Block {
  constructor() {
    super({ tagName: 'div', data: { className: ['profile'] } });
  }

  render(): DocumentFragment {
    console.log(this.props.state);
    const profileContext = {
      backPanel: new BackPanel(),
      avatar: new Avatar(),
      settings: new SettingsProfile(),
      control: new Control(),
    };

    return compile(templater, profileTmpl, profileContext);
  }
}
