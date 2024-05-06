type ContextMenuCallback = (element: HTMLElement) => void;

type ContextMenuOptions = {
  eventName?: string;
  onOpen?: ContextMenuCallback;
  onClose?: ContextMenuCallback;
};

declare global {
  type ContextMenuEntry = {
    name: string;
    icon: string;
    callback: (element: JQuery) => void;
    condition?: (element: JQuery) => boolean;
  };

  class ContextMenu {
    constructor(
      element: HTMLElement | JQuery,
      selector: string,
      menuItems: ContextMenuEntry[],
      options?: ContextMenuOptions,
    );

    menuItems: ContextMenuEntry[];
    render(target: JQuery): void;
  }

  interface Window {
    ContextMenu: typeof ContextMenu;
  }
}

export type {};
