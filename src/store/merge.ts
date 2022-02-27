export type Indexed<T = unknown> = {
  [key in string]: T;
};

const is = {
  object: (x: unknown) => typeof x === 'object',
  string: (x: unknown) => typeof x === 'string',
};
const uniq = (xs: string[]) => Array.from(new Set(xs));

export const merge = (obj1: Indexed, obj2: Indexed): Indexed => {
  const res: Indexed = {};

  const commonKeys = uniq(Object.keys(obj1).concat(Object.keys(obj2)));

  for (const key of commonKeys) {
    const a = obj1[key];
    const b = obj2[key];

    if (is.object(a) && is.object(b)) {
      res[key] = merge(a as Indexed, b as Indexed);
    } else {
      res[key] = a ?? b;
    }
  }

  return res;
};
