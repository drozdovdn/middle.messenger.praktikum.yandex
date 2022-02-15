export const rangeRight = (start: number, end?: number, step?: number) => {
  const ZERO = 0;

  if (start >= ZERO && !end && !step) {
    return [...new Array(start).keys()].reverse();
  } else {
    const out = [];

    if (start >= ZERO && end && end > start && step === ZERO) {
      for (let i = start; i < end; i++) {
        out.push(1);
      }
      return [...out.reverse()];
    }

    if (
      start >= ZERO &&
      end &&
      end > start &&
      (!step || Math.abs(step) === ZERO)
    ) {
      for (let i = start; i < end; i++) {
        out.push(i);
      }
      return [...out.reverse()];
    }

    if (
      start <= ZERO &&
      end &&
      end < start &&
      (!step || Math.abs(step) === ZERO)
    ) {
      for (let i = end + 1; i <= start; ++i) {
        out.push(i);
      }
      return [...out];
    }

    if (start >= ZERO && end && end > start && step > ZERO) {
      for (let i = start; i < end; i += step) {
        out.push(i);
      }
      return [...out.reverse()];
    }

    if (start <= ZERO && end && end < start && step < ZERO) {
      for (let i = end + 1; i <= start; i += step) {
        out.push(i);
      }
      return [...out];
    }

    for (let i = start + 1; i <= ZERO; ++i) {
      out.push(i);
    }
    return [...out];
  }
};
