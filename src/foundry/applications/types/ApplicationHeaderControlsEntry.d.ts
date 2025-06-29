declare global {
  namespace foundry {
    namespace applications {
      namespace types {
        interface ApplicationHeaderControlsEntry {
          action: string;
          icon: string;
          label: string;
          onClick?: (event: PointerEvent) => void | Promise<void>;
          ownership?: foundry.CONST.DocumentOwnershipLevel;
          visible?: boolean | (() => boolean);
        }
      }
    }
  }
}

export type {};
