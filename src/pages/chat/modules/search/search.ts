import './search.less';
import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';
import { templater } from '../../../../templater';
import { searchTmpl } from './search.tmpl';

export class Search extends Block {
  constructor() {
    super({ tagName: 'label', data: { className: ['search__label'] } });
  }

  render(): DocumentFragment {
    const searchContext = {};
    return compile(templater, searchTmpl, searchContext);
  }
}
