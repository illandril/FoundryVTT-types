declare global {
  class Canvas {
    get ready(): boolean;

    get stage(): PIXI.Container | undefined;
    get grid(): foundry.grid.BaseGrid | null;
    get hud(): foundry.applications.hud.HeadsUpDisplayContainer | undefined;
    get tokens(): TokenLayer | undefined;
    get interface(): InterfaceCanvasGroup | undefined;

    get dimensions(): SceneDimensions | undefined;
    get scene(): Scene | null;

    animatePan(args: Partial<CanvasViewPosition> & { duration?: number; speed?: number }): Promise<unknown>;
    canvasCoordinatesFromClient: (origin: { x: number; y: number }) => { x: number; y: number };
    clientCoordinatesFromCanvas: (origin: { x: number; y: number }) => { x: number; y: number };
  }
}

export type {};
