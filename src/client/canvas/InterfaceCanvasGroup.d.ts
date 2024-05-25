declare global {
  class InterfaceCanvasGroup {
    static groupName: 'interface';

    get grid(): GridLayer | null;
  }
}

export type {};
