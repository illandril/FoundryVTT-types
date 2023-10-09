type Position = {
  x: number
  y: number
};

type MeasureDistanceOptions = {
  gridSpaces?: boolean
};

declare global {
  class GridLayer extends CanvasLayer {
    get size(): number;
    get isHex(): boolean;
    get grid(): BaseGrid;

    measureDistance(origin: Position, target: Position, option?: MeasureDistanceOptions): number;
  }
}

export {};
