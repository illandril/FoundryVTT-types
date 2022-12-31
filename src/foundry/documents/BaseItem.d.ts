declare global {
  namespace foundry {
    namespace documents {
      class BaseItem extends foundry.abstract.Document {
        static TYPES: string[];
        get name(): string;
        get type(): string;
        get sort(): number;
      }
    }
  }
}

export {};
