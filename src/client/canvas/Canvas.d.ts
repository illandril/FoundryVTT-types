declare global {
  class Canvas {
    get ready(): boolean;
    get tokens(): TokenLayer | undefined;
    animatePan(args: { x: number, y: number, duration?: number, speed?: number }): Promise<unknown>;
  }
}

export {};
