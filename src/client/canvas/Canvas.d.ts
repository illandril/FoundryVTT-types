declare global {
  class Canvas {
    get ready(): boolean;

    get stage(): PIXI.Container | undefined;
    get grid(): GridLayer | null;
    get hud(): HeadsUpDisplay | undefined;
    get tokens(): TokenLayer | undefined;

    get dimensions(): SceneDimensions | undefined;
    get scene(): Scene | null;

    animatePan(args: Partial<CanvasViewPosition> & { duration?: number, speed?: number }): Promise<unknown>;
    canvasCoordinatesFromClient: (origin: { x: number, y: number }) => { x: number, y: number };
    clientCoordinatesFromCanvas: (origin: { x: number, y: number }) => { x: number, y: number };
  }
}

export {};
