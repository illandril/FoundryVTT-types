import { UserConstructor } from './constructors';

declare global {
  class User extends UserConstructor {
  }
}

export {};
