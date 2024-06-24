declare global {
  namespace foundry {
    namespace data {
      namespace fields {
        class DataField<T = unknown> {
          get required(): boolean;
          get nullable(): boolean;
          get initial(): T | undefined;
          get readonly(): boolean;
          get gmOnly(): boolean;
          get label(): string;
          get hint(): string;
          get validationError(): string;

          clean(value: unknown, options?: { partial?: boolean }): T;
        }
      }
    }
  }
}

export type {};
