declare global {
  namespace foundry {
    namespace grid {
      class HexagonalGrid extends BaseGrid {
        get columns(): boolean;
        get even(): boolean;
      }
    }
  }
}
export type {};
