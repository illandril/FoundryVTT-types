declare global {
  namespace foundry {
    namespace applications {
      namespace types {
        interface ApplicationTab {
          active: boolean;
          cssClass: string;
          group: string;
          icon?: string;
          id: string;
          label?: string;
          tooltip?: string;
        }
      }
    }
  }
}

export type {};
