type HotbarOptions = {
  permanent?: boolean;
  localize?: boolean;
  console?: boolean;
};

declare global {
  class Hotbar extends Application {
    get page(): number;
    get macros(): Macro[];
    get locked(): boolean;

    collapse(): Promise<boolean>;
    expand(): Promise<boolean>;
    changePage(page: number): void;
    cyclePage(direction: 1 | -1): void;
  }
}

export type {};
