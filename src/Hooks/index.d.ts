
import { Application } from '../Application/Application';

type HookCallback<Args> = (...args: Args) => void;
type EmptyCallback = HookCallback<void>;

interface HookCallbacks {
  init: EmptyCallback
  ready: () => void
  setup: () => void
  i18nInit: () => void
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
