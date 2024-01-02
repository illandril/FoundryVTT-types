declare global {
  class BasePlaceableHUD<
    ObjectType extends PlaceableObject<foundry.abstract.Document>,
  > extends Application {
    get object(): ObjectType | undefined;

    setPosition(position?: Partial<Omit<Application.Position, 'height'>> & {
      height?: 'auto' | number | null
    }): void;
    clear(): void;
  }
}

export {};
