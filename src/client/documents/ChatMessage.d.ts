import { ClientDocument } from './ClientDocument';

declare global {
  class ChatMessage extends foundry.documents.BaseChatMessage implements ClientDocument {
    isOwner: ClientDocument['isOwner'];
    hasPlayerOwner: ClientDocument['hasPlayerOwner'];
    visible: ClientDocument['visible'];
    prepareDerivedData: ClientDocument['prepareDerivedData'];
    render: ClientDocument['render'];

    static getSpeaker(options?: { scene: Scene, actor: Actor, token: TokenDocument, alias: string }): SpeakerType;

    get alias(): string;
    get isAuthor(): boolean;
    get isContentVisible(): boolean;
    get isRoll(): boolean;
  }
}

export {};
