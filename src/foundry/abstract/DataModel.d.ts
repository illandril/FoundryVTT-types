declare global {
  namespace foundry {
    namespace abstract {
      class DataModel {
        static get schema(): foundry.data.fields.SchemaField;

        get parent(): DataModel | undefined;
      }
    }
  }
}

export type {};
