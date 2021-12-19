import { isNumber } from "../number";

describe("isNumber", () => {
  const checker = isNumber();

  it("should validate number", () => {
    expect(checker.isValid(123123)).toBe(true);
  });

  const failValues = [
    false,
    true,
    undefined,
    null,
    "hello",
    "123",
    {},
    [1, 2],
    new Date(),
    function () {
      return 1;
    },
  ];

  it.each(failValues)("should invalidate %p as number", (value) => {
    expect(checker.isValid(value)).toBe(false);
  });
});
