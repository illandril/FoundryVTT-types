declare global {
  namespace foundry {
    namespace applications {
      namespace ui {
        class Hotbar extends foundry.applications.api.ApplicationV2 {
          get page(): number;
          get macros(): Macro[];
          get locked(): boolean;

          collapse(): Promise<boolean>;
          expand(): Promise<boolean>;
          changePage(page: number): void;
          cyclePage(direction: 1 | -1): void;
        }
      }
    }
  }
}

export type {};
