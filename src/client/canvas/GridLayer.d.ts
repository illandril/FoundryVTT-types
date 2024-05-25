type Position = {
  x: number;
  y: number;
};

type MeasureDistanceOptions = {
  gridSpaces?: boolean;
};

declare global {
  class GridLayer extends CanvasLayer {
    get isHexagonal(): boolean;
    get grid(): foundry.grid.BaseGrid;

    measureDistance(origin: Position, target: Position, option?: MeasureDistanceOptions): number;
  }
}

export type {};
