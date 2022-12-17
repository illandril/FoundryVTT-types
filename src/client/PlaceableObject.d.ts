declare global {
  class PlaceableObject<T extends foundry.abstract.Document> extends PIXI.Container {
    release(options?: { trigger?: boolean }): boolean;
    get document(): T;
  }
}

export {};
