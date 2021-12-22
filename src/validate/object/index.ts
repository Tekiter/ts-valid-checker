import { ValidChecker } from "../base";
import { TypeChain } from "../typeChain";

export function isObject<T extends UsualObject>(objectShape: ObjectValidCheckerShape<T>): ObjectChain<T> {
  return new ObjectChain(objectShape);
}

type UsualObject = { [key in string]: unknown };
type ObjectValidCheckerShape<T extends UsualObject> = {
  [key in keyof T]: ValidChecker<T[key]>;
};

export class ObjectChain<T extends UsualObject> extends TypeChain<T> {
  constructor(private objectShape: ObjectValidCheckerShape<T>) {
    super();
  }

  typeValidCheck(value: unknown): value is T {
    if (!(value instanceof Object) || value === null) {
      return false;
    }

    for (const key of Object.keys(this.objectShape)) {
      if (!(key in value)) {
        return false;
      }

      if (!this.objectShape[key].isValid((value as UsualObject)[key])) {
        return false;
      }
    }
    return true;
  }

  isStrict(): this {
    return this.chain((value) => {
      for (const key of Object.keys(value)) {
        if (!(key in this.objectShape)) {
          return false;
        }
      }

      return true;
    });
  }
}
