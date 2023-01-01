declare global {
  class Canvas {
    get ready(): boolean;
    get tokens(): TokenLayer | undefined;
    get hud(): HeadsUpDisplay | undefined;
    get dimensions(): SceneDimensions | undefined;
    get stage(): PIXI.Container | undefined;
    animatePan(args: Partial<CanvasViewPosition> & { duration?: number, speed?: number }): Promise<unknown>;
  }
}

export {};
