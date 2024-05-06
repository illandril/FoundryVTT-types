declare global {
  class Token extends PlaceableObject<TokenDocument> {
    get actor(): Actor;

    get owner(): boolean;
    get observer(): boolean;

    get isVisible(): boolean;

    get effects(): PIXI.Container;

    /**
     * Translate the token's grid width into a pixel width based on the canvas size
     */
    get w(): number;

    /**
     * Translate the token's grid height into a pixel height based on the canvas size
     */
    get h(): number;

    drawEffects(): Promise<void>;
    _refreshEffects(): void;
  }
}

export type {};
