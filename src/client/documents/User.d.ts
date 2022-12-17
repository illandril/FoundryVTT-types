import { UserConstructor } from './constructors';

declare global {
  class User extends UserConstructor {
    get viewedScene(): string | null;
  }
}

export {};
