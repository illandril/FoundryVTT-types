declare global {
  class PlaceableObject<DocumentType extends foundry.abstract.Document> extends PIXI.Container {
    get document(): DocumentType;
    get center(): PIXI.Point;
    get mouseInteractionManager(): MouseInteractionManager;
    get bounds(): PIXI.Rectangle;
    get scene(): Scene;

    control(options?: { releaseOthers?: boolean }): boolean;
    release(options?: { trigger?: boolean }): boolean;
  }
}

export type {};
