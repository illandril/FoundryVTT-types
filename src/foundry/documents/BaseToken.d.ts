declare global {
  namespace foundry {
    namespace documents {
      type BaseTokenFields = foundry.abstract.DocumentFields & {
        name: string

        texture: foundry.data.TextureData

        actorId: string
        actorLink: boolean

        width: number
        height: number
        x: number
        y: number
        elevation: number
        rotation: number

        effects: string[]
        overlayEffect: string

        hidden: boolean

        disposition: number
      };

      class BaseToken extends foundry.abstract.Document {
        get name(): BaseTokenFields['name'];

        get actorId(): BaseTokenFields['actorId'];
        get actorLink(): BaseTokenFields['actorLink'];

        get texture(): BaseTokenFields['texture'];

        get width(): BaseTokenFields['width'];
        get height(): BaseTokenFields['height'];
        get x(): BaseTokenFields['x'];
        get y(): BaseTokenFields['y'];
        get elevation(): BaseTokenFields['elevation'];
        get rotation(): BaseTokenFields['rotation'];

        get effects(): BaseTokenFields['effects'];
        get overlayEffect(): BaseTokenFields['overlayEffect'];

        get hidden(): BaseTokenFields['hidden'];

        get disposition(): BaseTokenFields['disposition'];
      }
    }
  }
}

export {};
