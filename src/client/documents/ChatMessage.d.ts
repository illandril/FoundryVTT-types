import { ChatMessageConstructor } from './constructors';

declare global {
  class ChatMessage extends ChatMessageConstructor {
    static getSpeaker(options?: { scene: Scene, actor: Actor, token: TokenDocument, alias: string }): SpeakerType;

    get alias(): string;
    get isAuthor(): boolean;
    get isContentVisible(): boolean;
    get isRoll(): boolean;
    get visible(): boolean;
  }
}

export {};
