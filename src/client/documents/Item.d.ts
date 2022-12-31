import { ItemConstructor } from './constructors';

declare global {

  class Item<
    ActorType extends Actor = Actor,
  > extends ItemConstructor {
    get actor(): ActorType | null;
  }
}

export {};
