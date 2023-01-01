
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

  renderActorSheet: (actorSheet: ActorSheet, element: JQuery) => void
  renderChatLog: (chatLog: Application, element: JQuery) => void
  renderChatMessage: (chatMessage: ChatMessage, element: JQuery) => void

  controlToken: (token: Token, controlled: boolean) => void

  preUpdateItem: (item: Item, changes: Partial<foundry.documents.BaseItemFields>, options: DocumentModificationContext) => boolean | void
  createItem: (item: Item, options: DocumentModificationContext, userId: string) => void
  deleteItem: (item: Item, options: DocumentModificationContext, userId: string) => void
  updateItem: (item: Item, changes: Partial<foundry.documents.BaseItemFields>, options: DocumentModificationContext, userId: string) => void
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
  ) => true

  call: <K extends keyof HookCallbacks>(
    hook: K,
    ...args: Parameters<HookCallbacks[K]>,
  ) => boolean
};

declare global {
  const Hooks: HooksType;
}

export {};
