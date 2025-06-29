declare global {
  namespace foundry {
    namespace applications {
      namespace types {
        interface ApplicationRenderContext {
          tabs?: Record<string, ApplicationTab>;
        }
      }
    }
  }
}

export type {};
