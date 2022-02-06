import './settinps.less';
import { InputProfile } from '../../../../components/inputProfile/inputProfile';
import { templater } from '../../../../templater';
import { settingsTmpl } from './settings.tmpl';
import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';

export class SettingsProfile extends Block {
  constructor() {
    super('section', { className: ['settings'] });
  }

  render(): DocumentFragment {
    const settingsContext = {
      data: [
        {
          input: new InputProfile({ label: 'Почта', name: 'email', value: 'pochta@yandex.ru' }),
        },
        {
          input: new InputProfile({ label: 'Логин', name: 'login', value: 'ivanivanov' }),
        },
        {
          input: new InputProfile({ label: 'Имя', name: 'first_name', value: 'Иван' }),
        },
        {
          input: new InputProfile({ label: 'Фамилия', name: 'second_name', value: 'Иванов' }),
        },
        {
          input: new InputProfile({ label: 'Имя в чате', name: 'display_name', value: 'Иван' }),
        },
        {
          input: new InputProfile({ label: 'Телефон', name: 'phone', value: '+7 (909) 967 30 30' }),
        },
      ],
    };
    return compile(templater, settingsTmpl, settingsContext);
  }
}
