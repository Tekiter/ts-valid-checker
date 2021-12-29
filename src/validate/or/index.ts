import { ValidChecker } from "../base";

type ExtractInner<T> = T extends [ValidChecker<infer R>, ...infer Rest] ? R | ExtractInner<Rest> : never;

export function isOr<T extends ValidChecker<unknown>[], R extends ValidChecker<unknown>>(
  checker: R,
  ...args: T
): ValidChecker<ExtractInner<[R, ...T]>>;
export function isOr<T extends ValidChecker<unknown>[]>(...args: T): ValidChecker<ExtractInner<T>> {
  return {
    isValid(value: unknown): value is ExtractInner<T> {
      for (const check of args) {
        if (check.isValid(value)) {
          return true;
        }
      }
      return false;
    },
  };
}
