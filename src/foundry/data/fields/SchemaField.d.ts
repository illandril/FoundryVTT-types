export type AnyFieldType = Partial<Record<string, foundry.data.fields.DataField>>;

declare global {
  namespace foundry {
    namespace data {
      namespace fields {
        class SchemaField<T extends AnyFieldType = AnyFieldType> extends DataField {
          get fields(): T;
        }
      }
    }
  }
}
