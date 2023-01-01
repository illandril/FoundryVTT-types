declare global {
  namespace foundry {
    namespace abstract {
      type DocumentFields = {
        _id: string
      };

      class Document extends foundry.abstract.DataModel {
        get id(): string;
        get system(): unknown;

        getFlag(scope: string, key: string): unknown;
        setFlag(scope: string, key: string, value: unknown): void;
        unsetFlag(scope: string, key: string): void;

        updateEmbeddedDocuments(embeddedName: string, updates?: unkown[], context?: unknown): Promise<foundry.abstract.Document[]>;
      }
    }
  }
}

export {};
