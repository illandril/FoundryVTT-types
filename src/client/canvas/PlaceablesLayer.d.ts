declare global {
  class PlaceablesLayer<T extends PlaceableObject> extends InteractionLayer {
    get controlled(): T[];
    get placeables(): T[];
    get(id: string): T | undefined;
  }
}

export {};
