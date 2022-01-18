/**
 * Выводит последний элемент массива
 * @param mass
 */
export const last = <T,>(mass: T[]) => {
    if(Array.isArray(mass)) {
        return mass[mass.length-1]
    }
}
