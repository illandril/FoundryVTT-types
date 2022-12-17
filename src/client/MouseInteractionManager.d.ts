
interface CallbackTypes {
  hoverIn: never
  hoverOut: never
  clickLeft: never
  clickLeft2: never
  longPress: [PIXI.Point]
  clickRight: never
  clickRight2: never
  dragLeftStart: never
  dragRightStart: never
  dragLeftMove: never
  dragRightMove: never
  dragLeftDrop: never
  dragRightDrop: never
  dragLeftCancel: never
  dragRightCancel: never
}

declare global {
  class MouseInteractionManager {
    can(action: keyof CallbackTypes, event: Event): boolean;
    callback<T extends keyof CallbackTypes>(action: T, event: Event, ...args: CallbackTypes[T]): void;
  }
}

export {};

