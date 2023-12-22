
declare global {
  class Module extends foundry.packages.BaseModule {
    get active(): boolean;
  }
}

export {};
