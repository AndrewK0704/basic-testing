// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 5, b: 4, action: Action.Add })).toBe(9);
  });

  test('should subtract two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 5, b: 4, action: Action.Subtract })).toBe(1);
  });

  test('should multiply two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 5, b: 4, action: Action.Multiply })).toBe(20);
  });

  test('should divide two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 5, b: 4, action: Action.Divide })).toBe(1.25);
  });

  test('should exponentiate two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 5, b: 4, action: Action.Exponentiate })).toBe(
      625,
    );
  });

  test('should return null for invalid action', () => {
    // Write your test here
    expect(simpleCalculator({ a: 5, b: 4, action: 'null' })).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    // Write your test here
    expect(
      simpleCalculator({ a: 'null', b: 4, action: Action.Exponentiate }),
    ).toBeNull();
  });
});
