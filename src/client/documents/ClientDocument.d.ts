export interface ClientDocument {
  /**
   * A boolean indicator for whether or not the current game User has ownership rights for this Document.
   * Different Document types may have more specialized rules for what constitutes ownership.
   */
  get isOwner(): boolean;

  /**
   * Test whether this Document is owned by any non-Gamemaster User.
   */
  get hasPlayerOwner(): boolean;

  /**
   * A boolean indicator for whether the current game User has at least limited visibility for this Document.
   * Different Document types may have more specialized rules for what determines visibility.
   */
  get visible(): boolean;

  /**
   * Apply transformations or derivations to the values of the source data object.
   * Compute data fields whose values are not stored to the database.
   */
  prepareDerivedData(): void;

  /**
   * Prepare data for the Document. This method is called automatically by the DataModel#_initialize workflow.
   * This method provides an opportunity for Document classes to define special data preparation logic.
   * The work done by this method should be idempotent.
   * There are situations in which prepareData may be called more than once.
   */
  prepareData(): void;

  /**
   * Render all of the Application instances which are connected to this document
   */
  render(force?: boolean, context?: Application.RenderOptions): void;

  update(data: unknown, context?: DocumentModificationContext): Promise<ClientDocument>;
}
