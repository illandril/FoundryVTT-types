declare global {
  /**
   * The core Game instance which encapsulates the data, settings, and states relevant for managing the game experience.
   * The singleton instance of the Game class is available as the global variable game.
   */
  class ClientSettings {
    register<T>(module: string, key: string, data: ClientSettings.Config<T>): void;
    get(module: string, key: string): unknown;
    set<T>(module: string, key: string, value: T): void;

    registerMenu<ObjectType extends object, Options extends FormApplicationOptions>(
      module: string,
      key: string,
      data: ClientSettings.MenuConfig<ObjectType, Options>
    ): void;
  }

  namespace ClientSettings {
    type MenuConfig<
      ObjectType extends object,
      Options extends FormApplicationOptions,
    > = {
      name: string
      label: string
      hint: string
      icon: string
      type: typeof FormApplication<ObjectType, Options>
      restricted: boolean
    };

    type TypeConstructor<T = unknown> =
      T extends string ? typeof String
        : T extends number ? typeof Number
          : T extends boolean ? typeof Boolean
            : T extends object ? typeof Object
              : never;

    type Config<T = unknown> = {
      name: string
      hint?: string
      scope: 'client' | 'world'
      config: boolean
      requiresReload?: boolean
      type: ClientSettings.TypeConstructor<T>
      default: T
      onChange?: (value: T) => void
      choices?: T extends string ? Record<string, string> : never
      range?: T extends number ? {
        min: number
        max: number
        step: number
      } : never
    };
  }
}

export {};
