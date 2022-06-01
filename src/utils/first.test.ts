import { assert } from 'chai';
import { first } from './first';

describe('Function first', () => {
  it('Взятие первого элемента массива', () => {
    assert.equal(first([1, 2, 3]), 1);
  });
});
