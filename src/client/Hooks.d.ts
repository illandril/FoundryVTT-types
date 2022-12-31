
import { Application } from './ui/Application';

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
  canvasPan: (canvas: Canvas, constrained: CanvasViewPosition) => void

  renderActorSheet: (actorSheet: Application, element: JQuery) => void
  renderChatLog: (chatLog: Application, element: JQuery) => void
  renderChatMessage: (chatMessage: ChatMessage, element: JQuery) => void

  controlToken: (token: Token, controlled: boolean) => void

  preUpdateItem: (item: Item, changes: unknown, options: unknown) => boolean | void
  createItem: (item: Item, options: unknown, userId: string) => void
  deleteItem: (item: Item, options: unknown, userId: string) => void
  updateItem: (item: Item, changes: unknown, options: unknown, userId: string) => void
}

type HooksType = {
  on: <K extends keyof HookCallbacks>(
    hook: K,
    fn: HookCallbacks[K],
  ) => void

  once: <K extends keyof HookCallbacks>(
    hook: K,
    fn: HookCallbacks[K],
  ) => void

  callAll: <K extends keyof HookCallbacks>(
    hook: K,
    ...args: Parameters<HookCallbacks[K]>,
  ) => void
};

declare global {
  const Hooks: HooksType;
}

export {};
