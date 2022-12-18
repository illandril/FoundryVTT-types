declare global {
  namespace foundry {
    namespace documents {
      class BaseToken extends foundry.abstract.Document {
        get actorId(): string;
        get texture(): foundry.data.TextureData;
      }
    }
  }
}

export {};
