import { ClientDocumentMixin } from '../mixins/ClientDocumentMixin';

export const ActorConstructor: ClientDocumentMixin<typeof foundry.documents.BaseActor>;
export const ChatMessageConstructor: ClientDocumentMixin<typeof foundry.documents.BaseChatMessage>;
export const SceneConstructor: ClientDocumentMixin<typeof foundry.documents.BaseScene>;
export const TokenDocumentConstructor: ClientDocumentMixin<typeof foundry.documents.BaseToken>;
export const UserConstructor: ClientDocumentMixin<typeof foundry.documents.BaseUser>;
