declare global {
  namespace foundry {
    namespace packages {
      class BasePackage extends foundry.abstract.DataModel {
        get id(): string;
        get version(): string;
      }
    }
  }
}

export {};
