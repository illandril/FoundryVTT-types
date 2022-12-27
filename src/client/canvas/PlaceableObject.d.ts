declare global {
  class PlaceableObject<T extends foundry.abstract.Document> extends PIXI.Container {
    get document(): T;
    get center(): PIXI.Point;
    get mouseInteractionManager(): MouseInteractionManager;
    get bounds(): PIXI.Rectangle;

    control(options?: { releaseOthers?: boolean }): boolean;
    release(options?: { trigger?: boolean }): boolean;
  }
}

export {};
