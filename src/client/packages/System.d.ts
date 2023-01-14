import { SystemConstructor } from './constructors';

declare global {
  class System extends SystemConstructor {
  }
}

export {};
