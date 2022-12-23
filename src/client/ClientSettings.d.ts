type StringSettingConfig = {
  type: typeof String
  default: string
  choices?: Record<string, string>
  onChange?: (value: string) => void
};

type NumberSettingConfig = {
  type: typeof Number
  default: number
  range?: {
    min: number
    max: number
    step: number
  }
  onChange?: (value: number) => void
};

type BigIntSettingConfig = {
  type: typeof BigInt
  default: bigint
  range?: {
    min: bigint
    max: bigint
    step: bigint
  }
  onChange?: (value: bigint) => void
};

type BooleanSettingConfig = {
  type: typeof Boolean
  default: boolean
  onChange?: (value: boolean) => void
};

type ObjectSettingConfig = {
  type: typeof Object
  default: object
  onChange?: (value: object) => void
};

type SettingConfig<T = never> = {
  name: string
  hint?: string
  scope: 'client' | 'world'
  config: boolean
  requiresReload?: boolean
} & (
  T extends string ? StringSettingConfig
    : T extends number ? NumberSettingConfig
      : T extends bigint ? BigIntSettingConfig
        : T extends boolean ? BooleanSettingConfig
          : T extends object ? ObjectSettingConfig
            : never);

declare global {
  /**
   * The core Game instance which encapsulates the data, settings, and states relevant for managing the game experience.
   * The singleton instance of the Game class is available as the global variable game.
   */
  class ClientSettings {
    register<N extends string, K extends string>(module: N, key: K, data: SettingConfig<ClientSettings.Values[`${N}.${K}`]>): void;

    get<N extends string, K extends string>(module: N, key: K): ClientSettings.Values[`${N}.${K}`];
    set<N extends string, K extends string>(module: N, key: K, value: ClientSettings.Values[`${N}.${K}`]): void;
  }

  namespace ClientSettings {
    interface Values {
      [key: string]: unknown
    }
  }
}

export {};
