import { TypeChain } from "../typeChain";

export function isNumber(): NumberChain {
  return new NumberChain();
}

export class NumberChain extends TypeChain<number> {
  typeValidCheck(value: unknown): value is number {
    return typeof value === "number";
  }
}
