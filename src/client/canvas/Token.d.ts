declare global {
  class Token extends PlaceableObject<TokenDocument> {
    get actor(): Actor;

    get observer(): boolean;

    get isVisible(): boolean;

    get effects(): PIXI.Container & {
      bg: PIXI.Graphics;
      overlay: PIXI.Sprite | null;
    };

    /**
     * Translate the token's grid width into a pixel width based on the canvas size
     */
    get w(): number;

    /**
     * Translate the token's grid height into a pixel height based on the canvas size
     */
    get h(): number;

    get shape(): PIXI.Rectangle | PIXI.Polygon | PIXI.Circle;

    drawEffects(): Promise<void>;
    _refreshEffects(): void;
  }
}

export type {};
