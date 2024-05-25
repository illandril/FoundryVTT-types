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

        /** @deprecated https://github.com/foundryvtt/foundryvtt/issues/10077 */
        getGridPositionFromPixels(x: number, y: number): [number, number];
      }
    }
  }
}

export type {};
