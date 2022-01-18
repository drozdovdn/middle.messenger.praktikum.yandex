import {get} from "../utils/get";
import { substitutionData } from "./substitutionData";

/**
 * Функция обработки циклов {{#with data}} {{/with}}
 * @param template
 * @param startKey
 */
export const processingWith = (template: string, startKey: string[], context: object): string  => {
    let _template = `${template}`
    let _context = {...context}
    let _startKey = [...startKey]
    let key = null
    const TEMPLATE_REGEXP = /\{\{(.*?)\}\}/gi;

    let _endKey = null

    //В цикле нахожу последний ключ цикла
    while ((key = TEMPLATE_REGEXP.exec(_template))) {
        const keyWithBrackets = key[0]
        const keyWithoutBrackets = key[1]
        if (keyWithoutBrackets) {
            const tmplValue = keyWithoutBrackets.trim();
            if(tmplValue.startsWith('/with')) {
                _endKey = key;
                break;
            }
        }
    }

    const _startKeyWithBrackets = _startKey[0]
    const _startKeyWithoutBrackets = _startKey[1]

    const _endKeyWithBrackets = _endKey[0]

    const start = _template.indexOf(_startKeyWithBrackets)
    const end = _template.indexOf(_endKeyWithBrackets) + _endKeyWithBrackets.length
    let dataWith = _template.slice(start, end) //получил зацикленный кусок шаблона
    const keyDataWith = _startKeyWithoutBrackets.split(' ')[1].trim() //получил ключ данных для цикла
    const dataContextWith = get(_context, keyDataWith) //получил данные для цикла

    let dataWith2 = dataWith.replace(_startKeyWithBrackets, '')
    dataWith2 = dataWith2.replace(_endKeyWithBrackets, '')

    const result = dataContextWith.reduce((acc,item) => acc + ' ' + substitutionData(dataWith2, item),'')

    _template = _template.replace(dataWith, result)


    return _template
}
