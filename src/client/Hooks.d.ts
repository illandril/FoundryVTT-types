type EmptyCallback = () => void;

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
    renderHeadsUpDisplay: (hud: HeadsUpDisplay, element: JQuery) => void

    controlToken: (token: Token, controlled: boolean) => void
    hoverToken: (token: Token, hovered: boolean) => void
    refreshToken: (token: Token) => void

    highlightObjects: (higlight: boolean) => void

    preUpdateActor: (actor: Actor, changes: Partial<foundry.documents.BaseActorFields>, options: DocumentModificationContext) => boolean | void
    createActor: (actor: Actor, options: DocumentModificationContext, userId: string) => void
    deleteActor: (actor: Actor, options: DocumentModificationContext, userId: string) => void
    updateActor: (actor: Actor, changes: Partial<foundry.documents.BaseActorFields>, options: DocumentModificationContext, userId: string) => void

    preUpdateCombat: (combat: Combat, changes: Partial<foundry.documents.BaseCombatFields>, options: DocumentModificationContext, userId: string) => boolean | void
    createCombat: (combat: Combat, options: DocumentModificationContext, userId: string) => void
    deleteCombat: (combat: Combat, options: DocumentModificationContext, userId: string) => void
    updateCombat: (combat: Combat, changes: Partial<foundry.documents.BaseCombatFields>, options: DocumentModificationContext, userId: string) => void

    preUpdateCombatant: (combatant: Combatant, changes: Partial<foundry.documents.BaseCombatantFields>, options: DocumentModificationContext, userId: string) => boolean | void
    createCombatant: (combatant: Combatant, options: DocumentModificationContext, userId: string) => void
    deleteCombatant: (combatant: Combatant, options: DocumentModificationContext, userId: string) => void
    updateCombatant: (combatant: Combatant, changes: Partial<foundry.documents.BaseCombatantFields>, options: DocumentModificationContext, userId: string) => void

    preUpdateItem: (item: Item, changes: Partial<foundry.documents.BaseItemFields>, options: DocumentModificationContext) => boolean | void
    createItem: (item: Item, options: DocumentModificationContext, userId: string) => void
    deleteItem: (item: Item, options: DocumentModificationContext, userId: string) => void
    updateItem: (item: Item, changes: Partial<foundry.documents.BaseItemFields>, options: DocumentModificationContext, userId: string) => void

    preUpdateToken: (token: TokenDocument, changes: Partial<foundry.documents.BaseTokenFields>, options: DocumentModificationContext, userId: string) => boolean | void
    createToken: (token: TokenDocument, options: DocumentModificationContext, userId: string) => void
    deleteToken: (token: TokenDocument, options: DocumentModificationContext, userId: string) => void
    updateToken: (token: TokenDocument, changes: Partial<foundry.documents.BaseTokenFields>, options: DocumentModificationContext, userId: string) => void

    preUpdateUser: (user: User, changes: Partial<foundry.documents.BaseUserFields>, options: DocumentModificationContext) => boolean | void
    createUser: (user: User, options: DocumentModificationContext, userId: string) => void
    deleteUser: (user: User, options: DocumentModificationContext, userId: string) => void
    updateUser: (user: User, changes: Partial<foundry.documents.BaseUserFields>, options: DocumentModificationContext, userId: string) => void
  }

  const Hooks: HooksType;
}

export {};
