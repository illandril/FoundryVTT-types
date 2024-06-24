declare global {
  namespace foundry {
    namespace data {
      namespace fields {
        class ArrayField<T extends DataField = DataField> extends DataField {
          get element(): T;
        }
      }
    }
  }
}

export type {};
