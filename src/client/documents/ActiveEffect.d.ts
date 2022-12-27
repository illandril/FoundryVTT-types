import { ActiveEffectConstructor } from './constructors';

declare global {
  class ActiveEffect extends ActiveEffectConstructor {
  }
}

export {};
