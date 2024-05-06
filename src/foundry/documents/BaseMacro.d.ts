declare global {
  namespace foundry {
    namespace documents {
      class BaseMacro extends foundry.abstract.Document {
        get name(): string;
        get type(): string;
        get command(): string;
      }
    }
  }
}

export type {};
