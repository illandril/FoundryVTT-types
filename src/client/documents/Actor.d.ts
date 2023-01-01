import { ActorConstructor } from './constructors';

declare global {

  class Actor<
    ItemType extends Item = Item,
    ActiveEffectType extends ActiveEffect = ActiveEffect,
  > extends ActorConstructor {
    get effects(): foundry.abstract.EmbeddedCollection<string, ActiveEffectType>;
    get temporaryEffects(): ActiveEffectType[];
    get items(): foundry.abstract.EmbeddedCollection<string, ItemType>;
  }
}

export {};
