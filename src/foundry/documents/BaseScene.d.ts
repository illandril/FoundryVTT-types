type GridConfiguration = {
  size: number;
  distance: number;
  units: string;
};

type TextureData = {
  src: string | null;
  scaleX: number;
  scaleY: number;
  offsetX: number;
  offsetY: number;
  rotation: number;
  tint: string | null;
};

declare global {
  namespace foundry {
    namespace documents {
      class BaseScene extends foundry.abstract.Document {
        get grid(): GridConfiguration;
        get tokens(): foundry.abstract.EmbeddedCollection<string, BaseToken>;
        get background(): TextureData;
      }
    }
  }
}

export type {};
