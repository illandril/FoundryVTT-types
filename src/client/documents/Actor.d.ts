import { ActorConstructor } from './constructors';

declare global {

  class Actor<
    ItemType extends Item = Item,
    ActiveEffectType extends ActiveEffect = ActiveEffect,
  > extends ActorConstructor {
    get effects(): ActiveEffectType[];
    get temporaryEffects(): ActiveEffectType[];
    get items(): ItemType[];
  }
}

export {};
