import { ActorConstructor } from './constructors';

declare global {

  class Actor extends ActorConstructor {
    get effects(): foundry.abstract.EmbeddedCollection<string, ActiveEffect>;
    get temporaryEffects(): ActiveEffect[];
    get items(): foundry.abstract.EmbeddedCollection<string, Item>;
  }
}

export {};
