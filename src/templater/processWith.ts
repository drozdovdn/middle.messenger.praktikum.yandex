import { get } from '../utils/get';
import { substitutionData } from './substitutionData';

/**
 * Функция обработки циклов {{#with data}} {{/with}}
 * @param template
 * @param startKey
 */
export const processingWith = (
  template: string,
  startKey: string[],
  context: object
): string => {
  let _template = `${template}`;
  const _context = { ...context };
  const _startKey = [...startKey];
  let key = null;
  const TEMPLATE_REGEXP = /\{\{(.*?)\}\}/gi;
  const TEMPLATE_REGEXP_KEY = /\{\{(.*?)\}\}/gi;

  let _endKey = null;

  //В цикле нахожу последний ключ цикла
  while (TEMPLATE_REGEXP.exec(_template)) {
    key = TEMPLATE_REGEXP_KEY.exec(_template)
    const keyWithoutBrackets = key[1];
    if (keyWithoutBrackets) {
      const tmplValue = keyWithoutBrackets.trim();
      if (tmplValue.startsWith('/with')) {
        _endKey = key;
        break;
      }
    }
  }

  const _startKeyWithBrackets = _startKey[0];
  const _startKeyWithoutBrackets = _startKey[1];

  const _endKeyWithBrackets = _endKey[0];

  const start = _template.indexOf(_startKeyWithBrackets);
  const end =
    _template.indexOf(_endKeyWithBrackets) + _endKeyWithBrackets.length;
  const dataWith = _template.slice(start, end); //получил зацикленный кусок шаблона
  const keyDataWith = _startKeyWithoutBrackets.split(' ')[1].trim(); //получил ключ данных для цикла
  const dataContextWith = get(_context, keyDataWith); //получил данные для цикла

  let dataWith2 = dataWith.replace(_startKeyWithBrackets, '');
  dataWith2 = dataWith2.replace(_endKeyWithBrackets, '');

  const result = dataContextWith.reduce(
    (acc, item) => `${acc} ${substitutionData(dataWith2, item)}`,
    ''
  );

  _template = _template.replace(dataWith, result);

  return _template;
};
