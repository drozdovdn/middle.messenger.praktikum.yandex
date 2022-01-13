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

import {get} from "../utils/get";
import {processingWith} from "./processWith";

/**
 * Функция принимает шаблон и сонтекст, возвращает string
 * @param template
 * @param context
 */
export const compile = (template, context) => {
    const _context = {...context}
    let _template = `${template}`
    const TEMPLATE_REGEXP = /\{\{(.*?)\}\}/gi;
    let key = null
    while ((key = TEMPLATE_REGEXP.exec(_template))) { //Выдергиваю по одному значения

        if (key[1]) {
            const tmplValue = key[1].trim();
            if(tmplValue.startsWith('#with')) { //Если это цикл
                //Передаю в функцию по обработке циклов шаблон и ключ начала цикла
               _template = processingWith(_template, key, _context)
            }
            const data = get(_context, tmplValue);
            //Если это функция
            if (typeof data === "function") {
                window[tmplValue] = data;
                _template = _template.replace(
                    new RegExp(key[0], "gi"),
                    `window.${key[1].trim()}(this)`
                );
                continue;
            }

            _template = _template.replace(new RegExp(key[0], "gi"), data);
        }
    }


    return _template
}

