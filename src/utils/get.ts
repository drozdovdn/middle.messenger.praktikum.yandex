export const get = <T>(obj: object, path: string, defaultValue?: T): any => {
  const keys = path.split('.');

  let result = obj;
  for (const key of keys) {
    result = result[key];

    if (result === undefined) {
      return defaultValue;
    }
  }

  return result ?? defaultValue;
};
