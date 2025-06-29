declare global {
  namespace foundry {
    namespace applications {
      namespace types {
        type ApplicationClickAction = (event: PointerEvent, target: HTMLElement) => void | Promise<void>;
      }
    }
  }
}

export type {};
