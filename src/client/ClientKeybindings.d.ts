declare global {
  class ClientKeybindings {
    register(module: string, key: string, data: ClientKeybindings.KeybindingActionConfig): void;
    get(module: string, key: string): ClientKeybindings.KeybindingActionBinding[];
  }

  namespace ClientKeybindings {
    type KeybindingActionBinding = {
      key: string
      modifiers?: typeof KeyboardManager.MODIFIER_KEYS[keyof typeof KeyboardManager.MODIFIER_KEYS]
    };

    type KeybindingActionConfig = {
      name: string
      hint: string
      editable: KeybindingActionBinding[]
      onDown: () => void
      onUp: () => void
      repeat?: boolean
      restricted?: boolean
      precedence: typeof foundry.CONST.KEYBINDING_PRECEDENCE[keyof typeof foundry.CONST.KEYBINDING_PRECEDENCE]
    };
  }
}

export {};
