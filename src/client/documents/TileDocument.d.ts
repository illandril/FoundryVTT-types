import { TileConstructor } from './constructors';

declare global {
  class TileDocument extends TileConstructor {
  }
}

export {};
