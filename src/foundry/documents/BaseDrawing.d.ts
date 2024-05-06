declare global {
  namespace foundry {
    namespace documents {
      class BaseDrawing extends foundry.abstract.Document {
        get shape(): foundry.data.ShapeData;
      }
    }
  }
}

export type {};
