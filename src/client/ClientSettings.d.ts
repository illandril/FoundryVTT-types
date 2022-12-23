
type SettingConfig<T = unknown> = {
  name: string
  hint?: string
  scope: 'client' | 'world'
  config: boolean
  requiresReload?: boolean
  type: ClientSettings.SettingConstructor<T>
  default: T,
  onChange?: (value: T) => void
  choices?: T extends string ? Record<string, string> : never
  range?: T extends number ? {
    min: number
    max: number
    step: number
  } : never
};

declare global {
  /**
   * The core Game instance which encapsulates the data, settings, and states relevant for managing the game experience.
   * The singleton instance of the Game class is available as the global variable game.
   */
  class ClientSettings {
    register<N extends string, K extends string, T extends ClientSettings.Values[`${N}.${K}`]>(module: N, key: K, data: SettingConfig<T>): void;

    get<N extends string, K extends string>(module: N, key: K): ClientSettings.Values[`${N}.${K}`];
    set<N extends string, K extends string>(module: N, key: K, value: ClientSettings.Values[`${N}.${K}`]): void;
  }

  namespace ClientSettings {
    type SettingConstructor<T = unknown> =
      T extends string ? typeof String
        : T extends number ? typeof Number
          : T extends boolean ? typeof Boolean
            : T extends object ? typeof Object
              : never;

    interface Values {
      [key: string]: never
    }
  }
}

export {};
