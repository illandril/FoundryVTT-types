import { TokenDocumentConstructor } from './constructors';

declare global {
  class TokenDocument extends TokenDocumentConstructor {
    get actor(): Actor;
    get actorLink(): boolean;
  }
}

export {};
