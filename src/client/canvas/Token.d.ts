declare global {
  class Token extends PlaceableObject<TokenDocument> {
    get actor(): Actor;

    get owner(): boolean;
    get observer(): boolean;

    get isVisible(): boolean;

    get effects(): PIXI.Container;

    drawEffects(): Promise<void>;
    _refreshEffects(): void;
  }
}

export {};
