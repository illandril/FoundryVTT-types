export type CommonTemplateSchema = {
  abilities: foundry.data.fields.DataField;
};

declare global {
  namespace dnd5e {
    namespace dataModels {
      namespace actor {
        class CommonTemplate extends dnd5e.dataModels.SystemDataModel {
          static get schema(): foundry.data.fields.SchemaField<CommonTemplateSchema>;

          prepareAbilities(options?: unknown): void;
        }
      }
    }
  }
}
