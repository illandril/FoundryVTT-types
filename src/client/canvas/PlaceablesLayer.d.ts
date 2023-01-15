declare global {
  class PlaceablesLayer<
    ObjectType = PlaceableObject<foundry.abstract.Document>,
  > extends InteractionLayer {
    get controlled(): ObjectType[];
    get placeables(): ObjectType[];
    get(id: string): ObjectType | undefined;
  }
}

export {};
