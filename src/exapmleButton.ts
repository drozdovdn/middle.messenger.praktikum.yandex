import { templater } from './templater';

export const buttonTmpl = `
    <button class="button {{className}}">
        {{name}}
    </button>
`;

import Block from './utils/block';
import { compile } from './utils/compile';

export default class ButtonExample extends Block {
  constructor(props) {
    // Создаём враппер дом-элемент button
    super('div', props);
  }

  render() {
    // В проекте должен быть ваш собственный шаблонизатор
    return compile(templater, buttonTmpl, this.props);
  }
}
