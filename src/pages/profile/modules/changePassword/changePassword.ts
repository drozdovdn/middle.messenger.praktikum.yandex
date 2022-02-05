import './changePassword.less';
import InputProfile from '../../../../components/inputProfile';
import { templater } from '../../../../templater';
import { changePasswordTmpl } from './changePassword.tmpl';
import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';

export class ChangePassword extends Block {
  constructor() {
    super('section', { className: ['change-password'] });
  }

  render(): DocumentFragment {
    const changePasswordContext = {
      data: [
        {
          inputProfile: new InputProfile({
            label: 'Старый пароль',
            name: 'oldPassword',
            value: 'password',
            type: 'password',
            disabled: '',
          }),
        },
        {
          inputProfile: new InputProfile({
            label: 'Новый пароль',
            name: 'newPassword',
            value: 'password',
            type: 'password',
            disabled: '',
          }),
        },
        {
          inputProfile: new InputProfile({
            label: 'Повторите новый пароль',
            name: 'repeatNewPassword',
            value: 'password',
            type: 'password',
            disabled: '',
          }),
        },
      ],
    };

    return compile(templater, changePasswordTmpl, changePasswordContext);
  }
}
