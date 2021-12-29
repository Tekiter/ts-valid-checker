import { TypeChain } from "../typeChain";

export function isString(): StringChain {
  return new StringChain();
}

export class StringChain extends TypeChain<string> {
  protected typeValidCheck(value: unknown): value is string {
    return typeof value === "string";
  }

  isNotEmptyOrWhiteSpace(): this {
    return this.chain((value) => {
      return value.trim() !== "";
    });
  }

  isStartsWith(startStr: string): this {
    return this.chain((value) => {
      return value.startsWith(startStr);
    });
  }
}
