import { isString } from "../string";

describe("isString", () => {
  it("should pass on string input", () => {
    expect(isString().isValid("a string")).toBe(true);
  });

  it("should fail on non string input", () => {
    const failValues = [
      false,
      true,
      undefined,
      null,
      123,
      {},
      [1, 2],
      new Date(),
      function () {
        return 1;
      },
    ];

    failValues.forEach((value) => {
      expect(isString().isValid(value)).toBe(false);
    });
  });
});

describe("isString.isNotEmptyOrWhiteSpace", () => {
  const checker = isString().isNotEmptyOrWhiteSpace();

  it("should validate empty or whitespace string", () => {
    expect(checker.isValid("")).toBe(false);
    expect(checker.isValid(" ")).toBe(false);
    expect(checker.isValid("    ")).toBe(false);
    expect(checker.isValid("\t")).toBe(false);
  });

  it("should invalidate non whitespace string", () => {
    expect(checker.isValid("str")).toBe(true);
    expect(checker.isValid("  str  ")).toBe(true);
    expect(checker.isValid("\tstr\t")).toBe(true);
  });
});

describe("isString.isStartsWith", () => {
  it("should validate correct prefix", () => {
    const checker = isString().isStartsWith("abc");

    expect(checker.isValid("abc")).toBe(true);
    expect(checker.isValid("abcde")).toBe(true);
  });

  it("should invalidate incorrect prefix", () => {
    const checker = isString().isStartsWith("abc");

    expect(checker.isValid("")).toBe(false);
    expect(checker.isValid("ddd")).toBe(false);
  });
});
