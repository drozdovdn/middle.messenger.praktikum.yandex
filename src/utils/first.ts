/**
 *
 * @param mass
 */
export const first = <T>(mass: T[]) => {
  if (Array.isArray(mass)) {
    return mass[0];
  }
};
