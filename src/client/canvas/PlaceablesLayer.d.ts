declare global {
  class PlaceablesLayer<
    ObjectType = PlaceableObject<foundry.abstract.Document>,
  > extends InteractionLayer {
    get controlled(): ObjectType[];
    get placeables(): ObjectType[];
    get hover(): ObjectType | null;
    get(id: string): ObjectType | undefined;
  }
}

export {};
