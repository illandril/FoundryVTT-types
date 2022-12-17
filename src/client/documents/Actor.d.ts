import { ActorConstructor } from './constructors';

declare global {

  class Actor extends ActorConstructor {
  }
}

export {};
