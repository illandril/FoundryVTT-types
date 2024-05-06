declare global {
  namespace foundry {
    namespace documents {
      class BaseTile extends foundry.abstract.Document {
        get texture(): foundry.data.TextureData;
        get width(): number;
        get height(): number;
      }
    }
  }
}

export type {};
