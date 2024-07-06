type GridMeasurePathWaypoint = GridCoordinates & {
  teleport?: boolean;
};

type GridMeasurePathResultWaypoint = {
  backward: GridMeasurePathResultSegment | null;
  forward: GridMeasurePathResultSegment | null;
  distance: number;
  spaces: number;
  cost: number;
};

type GridMeasurePathResultSegment = {
  from: GridMeasurePathResultWaypoint;
  to: GridMeasurePathResultWaypoint;
  teleport: boolean;
  distance: number;
  spaces: number;
  cost: number;
};

type GridMeasurePathResult = {
  waypoints: GridMeasurePathResultWaypoint[];
  segments: GridMeasurePathResultSegment[];
  distance: number;
  spaces: number;
  cost: number;
};

type GridMeasurePathCostFunction = (from: GridOffset, to: GridOffset, distance: number) => number;

declare global {
  namespace foundry {
    namespace grid {
      class BaseGrid {
        get distance(): number;
        get units(): string;

        get size(): number;
        get sizeX(): number;
        get sizeY(): number;

        get isSquare(): boolean;
        get isHexagonal(): boolean;
        get type(): number;

        measurePath(
          waypoints: GridMeasurePathWaypoint[],
          options?: {
            cost?: GridMeasurePathCostFunction;
          },
        ): GridMeasurePathResult;

        /** @deprecated https://github.com/foundryvtt/foundryvtt/issues/10077 */
        getGridPositionFromPixels(x: number, y: number): [number, number];
      }
    }
  }
}

export type {};
