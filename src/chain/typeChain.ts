import { ValidChecker } from "../base";

export abstract class TypeChain<T> implements ValidChecker<T> {
  private checkers: CheckerFunction<T>[];

  constructor() {
    this.checkers = [];
  }

  isValid(value: unknown): value is T {
    return this.typeValidCheck(value) && this.checkers.every((chk) => chk(value));
  }

  protected chain(checkerFunc: CheckerFunction<T>): this {
    this.checkers.push(checkerFunc);
    return this;
  }

  abstract typeValidCheck(value: unknown): value is T;
}

interface CheckerFunction<T> {
  (value: T): boolean;
}
