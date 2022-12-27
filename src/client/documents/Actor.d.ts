import { ActorConstructor } from './constructors';

declare global {

  class Actor extends ActorConstructor {
    get temporaryEffects(): ActiveEffect[];
  }
}

export {};
