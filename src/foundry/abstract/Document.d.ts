declare global {
  namespace foundry {
    namespace abstract {
      class Document extends foundry.abstract.DataModel {
        get id(): string;
        getFlag(scope: string, key: string): unknown;
        setFlag(scope: string, key: string, value: unknown): void;
        unsetFlag(scope: string, key: string): void;
      }
    }
  }
}

export {};
