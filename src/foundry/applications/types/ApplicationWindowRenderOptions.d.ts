declare global {
  namespace foundry {
    namespace applications {
      namespace types {
        interface ApplicationWindowRenderOptions {
          controls: boolean;
          icon: string | false;
          title: string;
        }
      }
    }
  }
}

export type {};
