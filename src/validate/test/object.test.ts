import { isNumber } from "../number";
import { isObject } from "../object";
import { isString } from "../string";

describe("isObject", () => {
  it("should validate object", () => {
    const checker = isObject({
      a: isString(),
      b: isNumber(),
    });

    expect(checker.isValid({ a: "hello", b: 123 })).toBe(true);
    expect(checker.isValid({ a: "hello", b: 123, c: "hahaha" })).toBe(true);
  });

  it("should validate derived object", () => {
    const checker = isObject({});

    expect(
      checker.isValid(() => {
        return 1;
      }),
    ).toBe(true);
    expect(checker.isValid(new Date())).toBe(true);
    expect(checker.isValid([1, 2, 3])).toBe(true);
  });

  it("should invalidate object with different type", () => {
    const checker = isObject({ a: isString() });
    expect(checker.isValid({ a: 123 })).toBe(false);
  });

  const failValues = [false, true, undefined, null, "hello", "123"];

  it.each(failValues)("should invalidate %p as object", (value) => {
    const checker = isObject({});

    expect(checker.isValid(value)).toBe(false);
  });

  it("should validate object with strict check", () => {
    const checker = isObject({ a: isString(), b: isNumber() }).isStrict();

    expect(checker.isValid({ a: "asdf", b: 123 })).toBe(true);
    expect(checker.isValid({ a: "asdf" })).toBe(false);
    expect(checker.isValid({ a: "asdf", b: 123, c: 456 })).toBe(false);
  });
});
