declare global {
  class Token extends PlaceableObject<TokenDocument> {
    get actor(): Actor;
  }
}

export {};
