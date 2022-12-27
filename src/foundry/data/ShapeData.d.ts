declare global {
  namespace foundry {
    namespace data {
      class ShapeData {
        get width(): number | undefined;
        get height(): number | undefined;
      }
    }
  }
}

export {};
