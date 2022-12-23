declare global {
  /**
   * The core Game instance which encapsulates the data, settings, and states relevant for managing the game experience.
   * The singleton instance of the Game class is available as the global variable game.
   */
  class Game {
    // readonly view: string;
    // readonly data: object;
    readonly release: foundry.config.ReleaseData;
    readonly userId: string | null;
    // readonly collections: foundry.utils.Collection<string, WorldCollection>;
    // readonly packs: foundry.utils.Collection<string, CompendiumCollection>;
    // readonly workers: WorkerManager;
    readonly i18n: Localization;
    // readonly keyboard: KeyboardManager | null;
    // readonly mouse: MouseManager | null;
    // readonly gamepad: GamepadManager | null;
    // readonly nue: NewUserExperience;
    // readonly permissions: object | null;
    // readonly sessionId: string;
    readonly settings: ClientSettings;
    // readonly keybindings: ClientKeybindings;
    // readonly socket: WebSocket | null;
    // readonly time: GameTime;
    readonly canvas: Canvas;
    // readonly audio: AudioHelper;
    // readonly video: VideoHelper;
    // readonly tooltip: TooltipManager;
    // readonly clipboard: ClipboardHelper;
    // readonly tours: Tours;
    // readonly documentIndex: DocumentIndex;
    // readonly debug: boolean;
    // readonly loading: boolean;
    // readonly ready: boolean;
    // readonly world: World | null;
    // readonly system: System | null;
    // readonly modules: foundry.utils.Collection<string, Module>;
    // readonly version: string;


    // readonly users: Users;
    // readonly folders: Folders;
    get actors(): Actors;
    // readonly items: Items;
    readonly scenes: Scenes;
    // readonly combats: CombatEncounters;
    // readonly journal: Journal;
    // readonly macros: Macros;
    // readonly playlists: Playlists;
    // readonly tables: RollTables;
    // readonly cards: CardStacks;
    // readonly messages: Messages;
    // get isAdmin(): boolean;
    get user(): User | null;
    // get combat(): Combat | undefined;
    // get paused(): boolean;

    // get activeTool(): string;
  }
}

export {};
