function isArray(value: unknown): value is [] {
  return Array.isArray(value);
}
type PlainObject<T = unknown> = {
  [k in string]: T;
};

function isPlainObject(value: unknown): value is PlainObject {
  return typeof value === 'object' && value !== null && value.constructor === Object && Object.prototype.toString.call(value) === '[object Object]';
}
function isArrayOrObject(value: unknown): value is [] | PlainObject {
  return isPlainObject(value) || isArray(value);
}
function isEqualObj(lhs: PlainObject, rhs: PlainObject) {
  // Сравнение количества ключей объектов и массивов
  if (Object.keys(lhs).length !== Object.keys(rhs).length) {
    return false;
  }

  for (const [key, value] of Object.entries(lhs)) {
    const rightValue = rhs[key];
    if (isArrayOrObject(value as PlainObject) && isArrayOrObject(rightValue)) {
      // Здесь value и rightValue может быть только массивом или объектом
      // И TypeScript это обрабатывает
      if (isEqualObj(value as PlainObject, rightValue as PlainObject)) {
        continue;
      }
      return false;
    }

    if (value !== rightValue) {
      return false;
    }
  }
  return true;
}
