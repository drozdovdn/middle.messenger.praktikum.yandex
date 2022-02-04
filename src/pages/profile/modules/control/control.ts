import './control.less';
import ItemControl from '../../../../components/itemControl';
import { templater } from '../../../../templater';
import { controlTmpl } from './control.tmpl';
import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';

export class Control extends Block {
  constructor() {
    super('div');
  }

  render(): DocumentFragment {
    const controlContext = {
      data: [
        {
          item: new ItemControl({
            title: 'Изменить данные',
            className: 'item-control__change-data',
          }),
        },
        {
          item: new ItemControl({
            title: 'Изменить пароль',
            className: 'item-control__change-password',
          }),
        },
        {
          item: new ItemControl({
            title: 'Выйти',
            className: 'item-control_red',
          }),
        },
      ],
    };

    return compile(templater, controlTmpl, controlContext);
  }
}
