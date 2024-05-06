type BaseGridOptions = {
  dimensions: SceneDimensions;
};

declare global {
  class BaseGrid extends PIXI.Container {
    get options(): BaseGridOptions;
    get w(): number;
    get h(): number;

    getGridPositionFromPixels(x: number, y: number): [number, number];
  }
}

export type {};
