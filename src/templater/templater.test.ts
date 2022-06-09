import { expect } from 'chai';
import { templater } from './index';

describe('Шаблонизатор', () => {
  it('Простая подстановка', () => {
    const context = {
      name: 'BUTTON',
    };
    const tmpl = `<button>{{name}}</button>`;
    expect(templater(tmpl, context)).to.eq(`<button>BUTTON</button>`);
  });
  it('Цикл', () => {
    const context = {
      data: [{ value: 'value 1' }, { value: 'value 2' }],
    };
    const tmpl = `{{#with data}}<div>{{value}}</div>{{/with}}`;
    expect(templater(tmpl, context)).to.eq(` <div>value 1</div> <div>value 2</div>`);
  });
});
