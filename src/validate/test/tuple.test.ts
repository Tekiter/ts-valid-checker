import { isTuple } from "../tuple";
import { isNumber } from "../number";
import { isString } from "../string";

describe("isTuple", () => {
  it("should validate empty tuple", () => {
    expect(isTuple([]).isValid([])).toBe(true);
  });

  it("should validate normal tuple", () => {
    expect(isTuple([isNumber(), isString()]).isValid([123, "asdf"])).toBe(true);
    expect(isTuple([isNumber()]).isValid([456])).toBe(true);
  });

  it("should validate exceeded tuple", () => {
    expect(isTuple([isNumber(), isString()]).isValid([123, "asdf", "fdaf"])).toBe(true);
    expect(isTuple([]).isValid([456])).toBe(true);
  });

  const failValues = [
    false,
    true,
    undefined,
    null,
    "hello",
    "123",
    {},
    new Date(),
    function () {
      return 1;
    },
  ];

  it.each(failValues)("should invalidate %p as tuple", (value) => {
    expect(isTuple([]).isValid(value)).toBe(false);
  });

  it("should invalidate wrong typed tuple", () => {
    expect(isTuple([isNumber()]).isValid(["123"])).toBe(false);
    expect(isTuple([isString(), isNumber()]).isValid(["123", "456"])).toBe(false);
  });
});
