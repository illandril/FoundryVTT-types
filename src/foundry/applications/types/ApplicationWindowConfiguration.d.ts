declare global {
  namespace foundry {
    namespace applications {
      namespace types {
        interface ApplicationWindowConfiguration {
          contentClasses?: string[];
          contentTag?: string;
          controls?: ApplicationHeaderControlsEntry[];
          frame?: boolean;
          icon?: string | false;
          minimizable?: boolean;
          positioned?: boolean;
          resizable?: boolean;
          title?: string;
        }
      }
    }
  }
}

export type {};
