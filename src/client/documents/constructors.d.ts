class ClientDocument {
  /**
   * A boolean indicator for whether or not the current game User has ownership rights for this Document.
   * Different Document types may have more specialized rules for what constitutes ownership.
   */
  get isOwner(): boolean;

  /**
   * Test whether this Document is owned by any non-Gamemaster User.
   */
  get hasPlayerOwner(): boolean;
}

type ClientDocumentMixin<T extends typeof foundry.abstract.Document> = {
  new (...args: unknown[]): ClientDocument & InstanceType<T>;
} & T;

export const ActorConstructor: ClientDocumentMixin<typeof foundry.documents.BaseActor>;
export const ChatMessageConstructor: ClientDocumentMixin<typeof foundry.documents.BaseChatMessage>;
export const SceneConstructor: ClientDocumentMixin<typeof foundry.documents.BaseScene>;
export const TokenDocumentConstructor: ClientDocumentMixin<typeof foundry.documents.BaseToken>;
export const UserConstructor: ClientDocumentMixin<typeof foundry.documents.BaseUser>;
