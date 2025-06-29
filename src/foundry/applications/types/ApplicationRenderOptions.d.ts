declare global {
  namespace foundry {
    namespace applications {
      namespace types {
        interface ApplicationRenderOptions {
          force?: boolean;
          isFirstRender?: boolean;
          parts?: string[];
          position?: ApplicationPosition;
          tab?: string | Record<string, string>;
          window?: ApplicationWindowRenderOptions;
        }
      }
    }
  }
}

export type {};
