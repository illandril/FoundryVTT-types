declare global {
  namespace foundry {
    namespace documents {
      class BaseToken extends foundry.abstract.Document {
        get actorId(): string;
        get actorLink(): boolean;

        get texture(): foundry.data.TextureData;

        get width(): number;
        get height(): number;
        get x(): number;
        get y(): number;

        get effects(): string[];
        get overlayEffect(): string;

        get hidden(): boolean;

        get disposition(): number;
      }
    }
  }
}

export {};
