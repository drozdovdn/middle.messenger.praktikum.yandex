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
    // let _dataWith = _startKey[1].trim()
    let key = null
    const TEMPLATE_REGEXP = /\{\{(.*?)\}\}/gi;

    let _endKey = null

    //В цикле нахожу последний ключ цикла
    while ((key = TEMPLATE_REGEXP.exec(_template))) {
        if (key[1]) {
            const tmplValue = key[1].trim();
            if(tmplValue.startsWith('/with')) {
                _endKey = key;
                break;
            }
        }
    }
    const start = _template.indexOf(_startKey[0])
    const end = _template.indexOf(_endKey[0]) + _endKey[0].length
    let dataWith = _template.slice(start, end) //получил зацикленный кусок шаблона
    const keyDataWith = _startKey[1].split(' ')[1].trim() //получил ключ данных для цикла
    const dataContextWith = get(_context, keyDataWith) //получил данные для цикла

    let dataWith2 = dataWith.replace(_startKey[0], '')
    dataWith2 = dataWith2.replace(_endKey[0], '')

    const result = dataContextWith.reduce((acc,item) => acc + ' ' + substitutionData(dataWith2, item),'')

    _template = _template.replace(dataWith, result)


    return _template
}
