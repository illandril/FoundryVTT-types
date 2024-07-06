declare global {
  type Point =
    | PIXI.Point
    | {
        x: number;
        y: number;
      };
}

export type {};
