declare global {
  namespace foundry {
    namespace applications {
      namespace api {
        class ApplicationV2<
          Configuration extends
            foundry.applications.types.ApplicationConfiguration = foundry.applications.types.ApplicationConfiguration,
          RenderOptions extends
            foundry.applications.types.ApplicationRenderOptions = foundry.applications.types.ApplicationRenderOptions,
        > {
          constructor(options?: Partial<Configuration>);

          static get DEFAULT_OPTIONS(): foundry.applications.types.ApplicationConfiguration;

          get classList(): DOMTokenList;
          get element(): HTMLElement;
          get form(): null | HTMLFormElement;
          get hasFrame(): boolean;
          get id(): string;
          get minimized(): boolean;
          get rendered(): boolean;
          get state(): number;
          get title(): string;
          get window(): {
            close: HTMLButtonElement;
            content: HTMLElement;
            controls: HTMLButtonElement;
            controlsDropdown: HTMLDivElement;
            header: HTMLElement;
            icon: HTMLElement;
            onDrag: (event: PointerEvent) => void;
            onResize: (event: PointerEvent) => void;
            pointerMoveThrottle: boolean;
            pointerStartPosition: foundry.applications.types.ApplicationPosition;
            resize: HTMLElement;
            title: HTMLHeadingElement;
          };

          _renderHTML(
            context: foundry.applications.types.ApplicationRenderContext,
            options: RenderOptions,
          ): Promise<unknown>;
          addEventListener(
            type: string,
            listener: foundry.utils.types.EmittedEventListener,
            options?: { once?: boolean },
          ): void;
          bringToFront(): void;
          changeTab(
            tab: string,
            group: string,
            options?: {
              event?: Event;
              force?: boolean;
              navElement?: HTMLElement;
              updatePosition?: boolean;
            },
          ): void;
          close(
            options?: Partial<foundry.applications.types.ApplicationClosingOptions>,
          ): Promise<ApplicationV2<Configuration, RenderOptions>>;
          dispatchEvent(event: Event): boolean;
          maximize(): Promise<void>;
          minimize(): Promise<void>;
          removeEventListener(type: string, listener: foundry.utils.types.EmittedEventListener): void;
          render(
            options?: boolean | RenderOptions,
            _options?: RenderOptions,
          ): Promise<ApplicationV2<Configuration, RenderOptions>>;
          setPosition(
            position?: Partial<foundry.applications.types.ApplicationPosition>,
          ): undefined | foundry.applications.types.ApplicationPosition;
          submit(submitOptions?: object): Promise<unknown>;
          toggleControls(expanded?: boolean, options?: { animate?: boolean }): Promise<void>;
        }
      }
    }
  }
}

export type {};
