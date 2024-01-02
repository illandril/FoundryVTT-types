export interface ClientDocument {
  /**
   * A boolean indicator for whether or not the current game User has ownership rights for this Document.
   * Different Document types may have more specialized rules for what constitutes ownership.
   */
  get isOwner(): boolean

  /**
   * Test whether this Document is owned by any non-Gamemaster User.
   */
  get hasPlayerOwner(): boolean

  /**
   * A boolean indicator for whether the current game User has at least limited visibility for this Document.
   * Different Document types may have more specialized rules for what determines visibility.
   */
  get visible(): boolean

  /**
   * Apply transformations or derivations to the values of the source data object.
   * Compute data fields whose values are not stored to the database.
   */
  prepareDerivedData(): void

  /**
   * Render all of the Application instances which are connected to this document
   */
  render(force?: boolean, context?: Application.RenderOptions): void

  update(data: unknown, context?: DocumentModificationContext): Promise<ClientDocument>
}
