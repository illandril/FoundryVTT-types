declare global {
  type Point =
    | typeof PIXI.Point
    | {
        x: number;
        y: number;
      };
}

export type {};
