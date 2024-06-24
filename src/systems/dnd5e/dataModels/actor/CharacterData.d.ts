import type { CreatureTemplateSchema } from './CreatureTemplate';

export type CharacterDataSchema = CreatureTemplateSchema & {
  attributes: foundry.data.fields.SchemaField;
  details: foundry.data.fields.SchemaField<{
    age: foundry.data.fields.DataField;
    alignment: foundry.data.fields.DataField;
    appearance: foundry.data.fields.DataField;
    background: foundry.data.fields.DataField;
    biography: foundry.data.fields.DataField;
    bond: foundry.data.fields.DataField;
    eyes: foundry.data.fields.DataField;
    faith: foundry.data.fields.DataField;
    flaw: foundry.data.fields.DataField;
    gender: foundry.data.fields.DataField;
    hair: foundry.data.fields.DataField;
    height: foundry.data.fields.DataField;
    ideal: foundry.data.fields.DataField;
    originalClass: foundry.data.fields.DataField;
    race: foundry.data.fields.DataField;
    skin: foundry.data.fields.DataField;
    trait: foundry.data.fields.DataField;
    weight: foundry.data.fields.DataField;
    xp: foundry.data.fields.DataField;
  }>;
  traits: foundry.data.fields.SchemaField;
  resources: foundry.data.fields.SchemaField<{
    primary: foundry.data.fields.DataField;
    secondary: foundry.data.fields.DataField;
    tertiary: foundry.data.fields.DataField;
  }>;
  favorites: foundry.data.fields.ArrayField<
    foundry.data.fields.SchemaField<{
      type: foundry.data.fields.DataField;
      id: foundry.data.fields.DataField;
      sort: foundry.data.fields.DataField;
    }>
  >;
};

declare global {
  namespace dnd5e {
    namespace dataModels {
      namespace actor {
        class CharacterData extends CreatureTemplate {
          static get schema(): foundry.data.fields.SchemaField<CharacterDataSchema>;

          hasFavorite(favoriteId: string): boolean;
        }
      }
    }
  }
}
