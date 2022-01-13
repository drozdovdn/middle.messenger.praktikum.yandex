import {get} from "../utils/get";


export const substitutionData =  (tmpl: string, context: object): string => {
    let _tmpl = `${tmpl}`
    let _context = {...context}
    let key = null
    const TEMPLATE_REGEXP = /\{\{(.*?)\}\}/gi;

    while ((key = TEMPLATE_REGEXP.exec(_tmpl))) {
        if (key[1]) {
            const tmplValue = key[1].trim();

            const data = get(_context, tmplValue);

            //Если это функция
            if (typeof data === "function") {
                window[tmplValue] = data;
                _tmpl = _tmpl.replace(
                    new RegExp(key[0], "gi"),
                    `window.${key[1].trim()}()`
                );
                continue;
            }
            _tmpl = _tmpl.replace(new RegExp(key[0], "gi"), data);
        }
    }
    return _tmpl
}