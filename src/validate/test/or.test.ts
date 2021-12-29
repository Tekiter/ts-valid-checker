import { isOr } from "../or";
import { isNumber } from "../number";
import { isString } from "../string";
import { isNull } from "../misc";

describe("isOr", () => {
  it("should validate union type", () => {
    const checker = isOr(isString(), isNumber(), isNull());

    expect(checker.isValid("hello")).toBe(true);
    expect(checker.isValid(123123)).toBe(true);
    expect(checker.isValid(null)).toBe(true);
  });

  it("should invalidate union type", () => {
    const checker = isOr(isString(), isNumber(), isNull());

    expect(checker.isValid(() => 3)).toBe(false);
    expect(checker.isValid({ name: "string" })).toBe(false);
    expect(checker.isValid(false)).toBe(false);
  });
});
