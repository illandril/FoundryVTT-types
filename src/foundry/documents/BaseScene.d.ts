type GridConfiguration = {
  size: number
  distance: number
  units: string
};

declare global {
  namespace foundry {
    namespace documents {
      class BaseScene extends foundry.abstract.Document {
        get grid(): GridConfiguration;
        get tokens(): foundry.abstract.EmbeddedCollection<string, BaseToken>;
      }
    }
  }
}

export {};
