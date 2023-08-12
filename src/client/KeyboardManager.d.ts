declare global {
  class KeyboardManager {
    static MODIFIER_KEYS: {
      CONTROL: string
      SHIFT: string
      ALT: string
    };

    static getKeycodeDisplayString(code: string): string;
  }
}

export {};

