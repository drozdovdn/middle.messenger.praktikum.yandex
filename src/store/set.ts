import { Indexed, merge } from './merge';

const isIndexed = (x: any): x is Indexed => typeof x === 'object';

export const set = (object: Indexed | unknown, path: string, value: unknown): Indexed | unknown => {
  // Код
  if (typeof path !== 'string') {
    throw Error('path must be string');
  }
  if (!isIndexed(object)) {
    return object;
  }

  const keys = path.split('.');

  const result = keys.reduceRight((acc, item, index) => {
    if (index === keys.length - 1) {
      return { [item]: value };
    } else {
      return { [item]: acc };
    }
    return acc;
  }, {});

  // const out = merge({...result}, object)
  //
  // Object.keys(out).forEach(item => {
  //   object[item] = out[item]
  // })

  return merge({ ...result }, object);
};

export default set;
