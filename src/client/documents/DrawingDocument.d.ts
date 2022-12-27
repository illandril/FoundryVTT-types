import { DrawingConstructor } from './constructors';

declare global {
  class DrawingDocument extends DrawingConstructor {
  }
}

export {};
