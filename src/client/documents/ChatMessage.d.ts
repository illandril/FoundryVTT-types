import type { ClientDocument } from './ClientDocument';

declare global {
  class ChatMessage extends foundry.documents.BaseChatMessage implements ClientDocument {
    isOwner: ClientDocument['isOwner'];
    hasPlayerOwner: ClientDocument['hasPlayerOwner'];
    visible: ClientDocument['visible'];
    prepareDerivedData: ClientDocument['prepareDerivedData'];
    render: ClientDocument['render'];
    update: ClientDocument['update'];

    static getSpeaker(options?: { scene?: Scene, actor?: Actor, token?: TokenDocument, alias?: string }): SpeakerType;
    static create(data: {
      speaker: {
        alias?: string
        actor?: Actor
        token?: TokenDocument
        scene?: Scene
      }
      content?: string
      whisper?: string[]
      flavor?: string
    }): ChatMessage;

    get alias(): string;
    get isAuthor(): boolean;
    get isContentVisible(): boolean;
    get isRoll(): boolean;
  }

  interface Window {
    ChatMessage: typeof ChatMessage
  }
}

export {};
