declare global {
  /**
   * Moved to `foundry.applications.handlebars` in v13
   * @deprecated
   */
  const getTemplate: typeof foundry.applications.handlebars.getTemplate;

  /**
   * Moved to `foundry.applications.handlebars` in v13
   * @deprecated
   */
  const renderTemplate: typeof foundry.applications.handlebars.renderTemplate;

  interface Window {
    /**
     * Moved to `foundry.applications.handlebars` in v13
     * @deprecated
     */
    getTemplate: typeof getTemplate;
    /**
     * Moved to `foundry.applications.handlebars` in v13
     * @deprecated
     */
    renderTemplate: typeof renderTemplate;
  }
}

export type {};
