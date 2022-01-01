import { ValidChecker } from "../base";

type TupleTypesFromShape<T> = T extends [ValidChecker<infer R>, ...infer Rest] ? [R, ...TupleTypesFromShape<Rest>] : [];

export function isTuple<T extends readonly ValidChecker<unknown>[]>(
  tupleShape: [...T],
): ValidChecker<TupleTypesFromShape<T>> {
  return {
    isValid(value: unknown): value is TupleTypesFromShape<T> {
      if (!Array.isArray(value)) {
        return false;
      }

      for (let i = 0; i < tupleShape.length; i++) {
        if (!tupleShape[i].isValid(value[i])) {
          return false;
        }
      }

      return true;
    },
  };
}
