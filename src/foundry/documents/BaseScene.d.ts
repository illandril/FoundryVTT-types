declare global {
  namespace foundry {
    namespace documents {
      class BaseScene extends foundry.abstract.Document {
        get tokens(): foundry.abstract.EmbeddedCollection<string, BaseToken>;
      }
    }
  }
}

export {};
