
import { Application } from './applications/Application';

type HookCallback<Args> = (...args: Args) => void;
type EmptyCallback = HookCallback<void>;

interface HookCallbacks {
  init: EmptyCallback
  ready: EmptyCallback
  setup: EmptyCallback
  i18nInit: EmptyCallback

  canvasInit: (canvas: Canvas) => void
  canvasReady: (canvas: Canvas) => void
  canvasTearDown: (canvas: Canvas) => void

  renderChatLog: (chatLog: Application, element: JQuery) => void

  controlToken: (token: Token, controlled: boolean) => void
}

type HooksType = {
  on: <K extends keyof HookCallbacks>(
    hook: K,
    fn: HookCallbacks[K],
  ) => void,

  once: <K extends keyof HookCallbacks>(
    hook: K,
    fn: HookCallbacks[K],
  ) => void,

};

declare global {
  const Hooks: HooksType;
}

export {};
