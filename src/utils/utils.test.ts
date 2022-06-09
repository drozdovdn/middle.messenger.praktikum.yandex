import { expect } from 'chai';
import { first } from './first';
import { last } from './last';

describe('Utils', () => {
  it('Взятие первого элемента массива', () => {
    expect(first([1, 2, 3])).to.equal(1);
  });
  it('Взятие последнего элемента массива', () => {
    expect(last([1, 2, 3])).to.equal(3);
  });
});
