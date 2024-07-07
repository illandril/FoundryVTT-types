declare global {
  class Token extends PlaceableObject<TokenDocument> {
    get actor(): Actor;

    get observer(): boolean;

    get isVisible(): boolean;

    get effects(): typeof PIXI.Container & {
      bg: typeof PIXI.Graphics;
      overlay: typeof PIXI.Sprite | null;
    };

    /**
     * Translate the token's grid width into a pixel width based on the canvas size
     */
    get w(): number;

    /**
     * Translate the token's grid height into a pixel height based on the canvas size
     */
    get h(): number;

    get shape(): typeof PIXI.Rectangle | typeof PIXI.Polygon | typeof PIXI.Circle;

    drawEffects(): Promise<void>;
    _refreshEffects(): void;
  }
}

export type {};
