import { get } from '../utils/get';

export const substitutionData = (tmpl: string, context: object): string => {
  let _tmpl = `${tmpl}`;
  const _context = { ...context };
  let key = null;
  const TEMPLATE_REGEXP = /\{\{(.*?)\}\}/gi;
  const TEMPLATE_REGEXP_KEY = /\{\{(.*?)\}\}/gi;

  while (TEMPLATE_REGEXP.exec(_tmpl)) {

    key = TEMPLATE_REGEXP_KEY.exec(_tmpl)

    const keyWithBrackets = key[0];
    const keyWithoutBrackets = key[1];

    if (keyWithoutBrackets) {
      const tmplValue = keyWithoutBrackets.trim();

      const data = get(_context, tmplValue);

      //Если это функция
      if (typeof data === 'function') {
        window[tmplValue] = data;
        _tmpl = _tmpl.replace(
          new RegExp(keyWithBrackets, 'gi'),
          `window.${keyWithoutBrackets.trim()}(this)`
        );
        continue;
      }
      _tmpl = _tmpl.replace(new RegExp(keyWithBrackets, 'gi'), data);
    }
  }
  return _tmpl;
};
