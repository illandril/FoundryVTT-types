import { ModuleConstructor } from './constructors';

declare global {
  class Module extends ModuleConstructor {
  }
}

export {};
