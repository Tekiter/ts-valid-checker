import { ValidChecker } from "../base";

export function isNull(): ValidChecker<null> {
  return nullChecker;
}

const nullChecker = Object.freeze({
  isValid(value: unknown): value is null {
    return value === null;
  },
});

export function isBoolean(): ValidChecker<boolean> {
  return booleanChecker;
}

const booleanChecker = Object.freeze({
  isValid(value: unknown): value is boolean {
    return typeof value === "boolean";
  },
});
