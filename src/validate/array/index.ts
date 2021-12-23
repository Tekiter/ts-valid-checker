import { ValidChecker } from "../base";
import { TypeChain } from "../typeChain";

export function isArray<T>(element: ValidChecker<T>): ArrayChain<T> {
  return new ArrayChain<T>(element);
}

export class ArrayChain<T> extends TypeChain<Array<T>> {
  constructor(private element: ValidChecker<T>) {
    super();
  }

  protected typeValidCheck(value: unknown): value is Array<T> {
    if (!Array.isArray(value)) {
      return false;
    }

    const allElementsValid = value.every((item) => this.element.isValid(item));
    if (!allElementsValid) {
      return false;
    }

    return true;
  }
}
