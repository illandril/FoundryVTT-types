declare global {
  class Token extends PlaceableObject<TokenDocument> {
    get actor(): Actor;
    get isVisible(): boolean;
    get effects(): PIXI.Container;
    async drawEffects(): void;
    _refreshEffects(): void;
  }
}

export {};
