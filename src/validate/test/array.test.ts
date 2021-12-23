import { isArray } from "../array";
import { isNumber } from "../number";
import { isString } from "../string";

describe("isArray", () => {
  it("should validate array type", () => {
    expect(isArray(isString()).isValid(["hello"])).toBe(true);
    expect(isArray(isNumber()).isValid([1, 2, 3])).toBe(true);
    expect(isArray(isNumber()).isValid([])).toBe(true);
  });

  it("should invalidate array with wrong element type", () => {
    expect(isArray(isNumber()).isValid(["asdf", "zxcv"])).toBe(false);
    expect(isArray(isNumber()).isValid([123, "zxcv"])).toBe(false);
  });
});
