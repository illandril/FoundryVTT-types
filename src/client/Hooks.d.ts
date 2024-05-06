type EmptyCallback = () => void;

type HookKey = keyof HookCallbacks | keyof GenericHooks;
type HookCallback<K extends HookKey> = K extends keyof HookCallbacks
  ? HookCallbacks[K]
  : K extends keyof GenericHooks
    ? GenericHooks[K]
    : never;

type HooksType = {
  on: <K extends HookKey>(hook: K, fn: HookCallback<K>) => void;

  once: <K extends HookKey>(hook: K, fn: HookCallback<K>) => void;

  callAll: <K extends HookKey>(hook: K, ...args: Parameters<HookCallback<K>>) => true;

  call: <K extends HookKey>(hook: K, ...args: Parameters<HookCallback<K>>) => boolean;
};

type GenericHooks = {
  [index: `render${string}`]: (application: Application, element: JQuery) => void;
  [index: `preUpdate${string}`]: (
    document: foundry.abstract.Document,
    changes: unknown,
    options: DocumentModificationContext,
    // biome-ignore lint/suspicious/noConfusingVoidType: There are two types of preUpdate hook - ones that might stop the update (return boolean) and those that never will (void)
  ) => boolean | void;
  [index: `update${string}`]: (
    document: foundry.abstract.Document,
    changes: unknown,
    options: DocumentModificationContext,
  ) => void;
  [index: `pre${'Create' | 'Delete'}${string}`]: (
    document: foundry.abstract.Document,
    changes: unknown,
    options: DocumentModificationContext,
  ) => void;
  [index: `${'create' | 'delete'}${string}`]: (
    document: foundry.abstract.Document,
    changes: unknown,
    options: DocumentModificationContext,
  ) => void;
  [index: `${'draw' | 'refresh' | 'destroy'}${string}`]: (object: PlaceableObject<foundry.abstract.Document>) => void;
  [index: `${'control' | 'hover'}${string}`]: (
    object: PlaceableObject<foundry.abstract.Document>,
    state: boolean,
  ) => void;
};

declare global {
  interface HookCallbacks {
    init: EmptyCallback;
    ready: EmptyCallback;
    setup: EmptyCallback;
    i18nInit: EmptyCallback;

    canvasInit: (canvas: Canvas) => void;
    canvasReady: (canvas: Canvas) => void;
    canvasTearDown: (canvas: Canvas) => void;
    canvasPan: (canvas: Canvas, constrained: CanvasViewPosition) => void;

    renderActorSheet: (actorSheet: ActorSheet, element: JQuery) => void;
    renderChatMessage: (chatMessage: ChatMessage, element: JQuery) => void;
    renderHeadsUpDisplay: (hud: HeadsUpDisplay, element: JQuery) => void;
    renderHotbar: (hotbar: Hotbar, element: JQuery) => void;
    renderTokenHUD: (tokenHUD: TokenHUD, element: JQuery) => void;

    controlToken: (token: Token, controlled: boolean) => void;
    hoverToken: (token: Token, hovered: boolean) => void;
    refreshToken: (token: Token) => void;

    highlightObjects: (higlight: boolean) => void;

    preUpdateActor: (
      actor: Actor,
      changes: Partial<foundry.documents.BaseActorFields>,
      options: DocumentModificationContext,
      // biome-ignore lint/suspicious/noConfusingVoidType: There are two types of preUpdate hook - ones that might stop the update (return boolean) and those that never will (void)
    ) => boolean | void;
    createActor: (actor: Actor, options: DocumentModificationContext, userId: string) => void;
    deleteActor: (actor: Actor, options: DocumentModificationContext, userId: string) => void;
    updateActor: (
      actor: Actor,
      changes: Partial<foundry.documents.BaseActorFields>,
      options: DocumentModificationContext,
      userId: string,
    ) => void;

    preUpdateCombat: (
      combat: Combat,
      changes: Partial<foundry.documents.BaseCombatFields>,
      options: DocumentModificationContext,
      userId: string,
      // biome-ignore lint/suspicious/noConfusingVoidType: There are two types of preUpdate hook - ones that might stop the update (return boolean) and those that never will (void)
    ) => boolean | void;
    createCombat: (combat: Combat, options: DocumentModificationContext, userId: string) => void;
    deleteCombat: (combat: Combat, options: DocumentModificationContext, userId: string) => void;
    updateCombat: (
      combat: Combat,
      changes: Partial<foundry.documents.BaseCombatFields>,
      options: DocumentModificationContext,
      userId: string,
    ) => void;

    preUpdateCombatant: (
      combatant: Combatant,
      changes: Partial<foundry.documents.BaseCombatantFields>,
      options: DocumentModificationContext,
      userId: string,
      // biome-ignore lint/suspicious/noConfusingVoidType: There are two types of preUpdate hook - ones that might stop the update (return boolean) and those that never will (void)
    ) => boolean | void;
    createCombatant: (combatant: Combatant, options: DocumentModificationContext, userId: string) => void;
    deleteCombatant: (combatant: Combatant, options: DocumentModificationContext, userId: string) => void;
    updateCombatant: (
      combatant: Combatant,
      changes: Partial<foundry.documents.BaseCombatantFields>,
      options: DocumentModificationContext,
      userId: string,
    ) => void;

    preUpdateItem: (
      item: Item,
      changes: Partial<foundry.documents.BaseItemFields>,
      options: DocumentModificationContext,
      // biome-ignore lint/suspicious/noConfusingVoidType: There are two types of preUpdate hook - ones that might stop the update (return boolean) and those that never will (void)
    ) => boolean | void;
    createItem: (item: Item, options: DocumentModificationContext, userId: string) => void;
    deleteItem: (item: Item, options: DocumentModificationContext, userId: string) => void;
    updateItem: (
      item: Item,
      changes: Partial<foundry.documents.BaseItemFields>,
      options: DocumentModificationContext,
      userId: string,
    ) => void;

    preUpdateToken: (
      token: TokenDocument,
      changes: Partial<foundry.documents.BaseTokenFields>,
      options: DocumentModificationContext,
      userId: string,
      // biome-ignore lint/suspicious/noConfusingVoidType: There are two types of preUpdate hook - ones that might stop the update (return boolean) and those that never will (void)
    ) => boolean | void;
    createToken: (token: TokenDocument, options: DocumentModificationContext, userId: string) => void;
    deleteToken: (token: TokenDocument, options: DocumentModificationContext, userId: string) => void;
    updateToken: (
      token: TokenDocument,
      changes: Partial<foundry.documents.BaseTokenFields>,
      options: DocumentModificationContext,
      userId: string,
    ) => void;

    preUpdateUser: (
      user: User,
      changes: Partial<foundry.documents.BaseUserFields>,
      options: DocumentModificationContext,
      // biome-ignore lint/suspicious/noConfusingVoidType: There are two types of preUpdate hook - ones that might stop the update (return boolean) and those that never will (void)
    ) => boolean | void;
    createUser: (user: User, options: DocumentModificationContext, userId: string) => void;
    deleteUser: (user: User, options: DocumentModificationContext, userId: string) => void;
    updateUser: (
      user: User,
      changes: Partial<foundry.documents.BaseUserFields>,
      options: DocumentModificationContext,
      userId: string,
    ) => void;
  }

  const Hooks: HooksType;
}

export type {};
