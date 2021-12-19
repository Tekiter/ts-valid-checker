export interface ValidChecker<T> {
  isValid(value: unknown): value is T;
}
