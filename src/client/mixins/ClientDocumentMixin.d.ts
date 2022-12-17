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

export type ClientDocumentMixin<T extends typeof foundry.abstract.Document> = {
  new (...args: unknown[]): ClientDocument & InstanceType<T>;
} & T;
