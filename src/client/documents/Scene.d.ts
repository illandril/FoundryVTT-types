import { SceneConstructor } from './constructors';

declare global {

  class Scene extends SceneConstructor {
  }
}

export {};
