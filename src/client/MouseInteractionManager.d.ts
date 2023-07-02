
interface CallbackWithArgsTypes {
  longPress: [PIXI.Point]
}

type CallbackWithoutArgsTypes =
  `hover${'In' | 'Out'}`
  | `click${'Left' | 'Right'}${'' | '2'}`
  | `drag${'Left' | 'Right'}${'Start' | 'Move' | 'Drop' | 'Cancel'}`;

type CallbackTypes = CallbackWithoutArgsTypes | keyof CallbackWithArgsTypes;
declare global {
  class MouseInteractionManager {
    can(action: CallbackTypes, event: Event): boolean;
    callback<T extends keyof CallbackWithArgsTypes>(action: T, event: Event, ...args: CallbackWithArgsTypes[T]): void;
    callback<T extends CallbackWithoutArgsTypes>(action: T, event: Event): void;
  }
}

export {};
