import type { CommonTemplateSchema } from './CommonTemplate';

export type CreatureTemplateSchema = CommonTemplateSchema & {
  bonuses: foundry.data.fields.DataField;
  skills: foundry.data.fields.DataField;
  tools: foundry.data.fields.DataField;
  spells: foundry.data.fields.DataField;
};

declare global {
  namespace dnd5e {
    namespace dataModels {
      namespace actor {
        class CreatureTemplate extends CommonTemplate {
          static get schema(): foundry.data.fields.SchemaField<CreatureTemplateSchema>;

          getRollData(options?: { deterministic?: boolean }): unknown;
        }
      }
    }
  }
}
