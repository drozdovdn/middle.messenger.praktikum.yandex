/**
 * Выводит последний элемент массива
 * @param mass
 */
export const last = (mass: any[]) => {
    if(Array.isArray(mass)) {
        return mass[mass.length-1]
    }
}