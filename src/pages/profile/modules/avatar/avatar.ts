import './avatar.less';
import { compile } from '../../../../templater';
import { avatarTmpl } from './avatar.tmpl';
import { FunProps } from '../../../../models';

const avatarContext = {
  src: '',
  name: 'Иван',
  text: 'Поменять аватар',
};

export const Avatar: FunProps = () => {
  return compile(avatarTmpl, avatarContext);
};
