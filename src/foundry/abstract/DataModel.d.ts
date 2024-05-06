declare global {
  namespace foundry {
    namespace abstract {
      class DataModel {
        get parent(): DataModel | undefined;
      }
    }
  }
}

export type {};
