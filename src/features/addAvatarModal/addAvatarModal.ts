import './addAvatarModal.less';
import { templater } from '../../templater';
import { addAvatarModalTmpl } from './addAvatarModal.tmpl';
import Button from '../../components/button';
import { FeatureProps } from '../../models';
import Block from '../../utils/block';
import { compile } from '../../utils/compile';
import Input from '../../components/input';

const button = new Button({
  name: 'Поменять',
  events: {
    click: () => console.log('Поменять клик'),
  },
});

const input = new Input({
  type: 'file',
  name: 'avatar',
  label: '',
  className: 'add-avatar-modal__input',
  events: {
    change: (e) => {
      const nameLabel = document.querySelector('.add-avatar-modal__name');
      const files = e.target.files;
      if (files && nameLabel) {
        nameLabel.textContent = files[0].name;
        nameLabel.classList.add('file-name');
        e.target.disabled = true;
      }
    },
  },
});
const addAvatarModalContext = {
  error: 'Ошибка, попробуйте еще раз',
  title: 'Загрузите файл',
  name: 'Выберите файл на компьюторе',
  input,
  button,
  warning: 'Нужно выбрать файл',
};

export class AddAvatarModal extends Block {
  constructor() {
    super('div');
  }

  render(): DocumentFragment {
    return compile(templater, addAvatarModalTmpl, addAvatarModalContext);
  }
}
