import { WorldConstructor } from './constructors';

declare global {
  class World extends WorldConstructor {
  }
}

export {};
