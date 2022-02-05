import Block from '../../../../utils/block';
import { compile } from '../../../../utils/compile';
import { templater } from '../../../../templater';
import { searchTmpl } from './search.tmpl';
import './search.less';

export class Search extends Block {
  constructor() {
    super('label', { className: ['search__label'] });
  }

  render(): DocumentFragment {
    const searchContext = {};
    return compile(templater, searchTmpl, searchContext);
  }
}
