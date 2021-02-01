import CounterUtils from "./counterUtils.js";

describe('Counter modifer fucntions', () => {
  test("Tests number increment", () => {
    expect(CounterUtils.increment(1)).toEqual(2);
  });

  test("Tests number decrement", () => {
    expect(CounterUtils.decrement(2)).toEqual(1);
  });

  test("Tests number decrement when number is less than 0", () => {
    expect(CounterUtils.decrement(-1)).toEqual(0);
  });
});
