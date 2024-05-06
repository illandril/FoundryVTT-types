declare global {
  class HexagonalGrid extends BaseGrid {
    get columnar(): boolean;
    get even(): boolean;
  }
}

export type {};
