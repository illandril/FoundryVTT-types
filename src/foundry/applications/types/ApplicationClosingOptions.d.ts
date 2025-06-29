declare global {
  namespace foundry {
    namespace applications {
      namespace types {
        interface ApplicationClosingOptions {
          animate: boolean;
          closeKey: boolean;
          submitted: boolean;
        }
      }
    }
  }
}

export type {};
