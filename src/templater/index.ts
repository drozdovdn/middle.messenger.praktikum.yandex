/***************
 * Шаблонизатор
 * *************
 *
 * !!Важно:
 *      Каждый ключ {{value}} должен находится на новой строке
 *
 * переменные:
 *      {{value}}
 * циклы:
 *      {{#with data}}
 *          <div>{{value}}</div>
 *      {{/with}}
 */

import { get } from '../utils/get';
import { processingWith } from './processWith';

/**
 * Функция принимает шаблон и сонтекст, возвращает string
 * @param template
 * @param context
 */
export const compile = (template, context) => {
  const _context = { ...context };
  let _template = `${template}`;
  const TEMPLATE_REGEXP = /\{\{(.*?)\}\}/gi;
  const TEMPLATE_REGEXP_KEY = /\{\{(.*?)\}\}/gi;

  let key = null;
  while (TEMPLATE_REGEXP.exec(_template)) {
    key = TEMPLATE_REGEXP_KEY.exec(_template)
    //Выдергиваю по одному значения

    const keyWithBrackets = key[0];
    const keyWithoutBrackets = key[1];

    if (keyWithoutBrackets) {
      const tmplValue = keyWithoutBrackets.trim();
      if (tmplValue.startsWith('#with')) {
        //Если это цикл
        //Передаю в функцию по обработке циклов шаблон и ключ начала цикла
        _template = processingWith(_template, key, _context);
      }
      const data = get(_context, tmplValue);
      //Если это функция
      if (typeof data === 'function') {
        window[tmplValue] = data;
        _template = _template.replace(
          new RegExp(keyWithBrackets, 'gi'),
          `window.${keyWithoutBrackets.trim()}(this)`
        );
        continue;
      }

      _template = _template.replace(new RegExp(keyWithBrackets, 'gi'), data);
    }
  }

  return _template;
};
