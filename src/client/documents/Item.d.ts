import { ItemConstructor } from './constructors';

declare global {

  class Item extends ItemConstructor {
    get actor(): Actor | null;
  }
}

export {};
