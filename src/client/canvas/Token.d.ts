declare global {
  class Token extends PlaceableObject<TokenDocument> {
    get actor(): Actor;
    get isVisible(): boolean;
  }
}

export {};
