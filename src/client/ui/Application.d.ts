declare global {
  abstract class Application<Options extends ApplicationOptions = ApplicationOptions> {
    constructor(options: Options);

    static get defaultOptions(): ApplicationOptions;

    options: Options;

    get element(): JQuery;
    get rendered(): boolean;
    get position(): Application.Position;
    get title(): string;

    setPosition(
      position?: Partial<Omit<Application.Position, 'height'>> & {
        height?: 'auto' | number | null;
      },
      // biome-ignore lint/suspicious/noConfusingVoidType: There are two types of setPosition implementations, depending on the application - some that return a position, some with no return
    ): Application.Position | void;

    render(force?: boolean, options?: Application.RenderOptions): this;
    close(options?: unknown): Promise<void>;
  }

  namespace Application {
    type Position = {
      left: number | null;
      top: number | null;
      width: number | null;
      height: number | null;
      scale: number | null;
    };

    type RenderOptions = {
      left: number;
      top: number;
      width: number;
      height: number;
      scale: number;
      focus: boolean;
      renderContext: string;
      renderData: unknown;
    };
  }

  interface Window {
    Application: typeof Application;
  }
}

export type {};
