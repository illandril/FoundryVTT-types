declare global {
  class BasePlaceableHUD<T extends PlaceableObject> extends Application {
    get object(): T | undefined;

    setPosition(position?: Omit<Application.Position, 'height'> & {
      height: 'auto' | number | null
    }): void;
  }
}

export {};
