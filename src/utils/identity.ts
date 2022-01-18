/**
 * const object = {'a' : 1};
 * identity(object) === object; // => true
 * @param value
 */
export const identity = <T,>(value: T) => {
    return value
}
