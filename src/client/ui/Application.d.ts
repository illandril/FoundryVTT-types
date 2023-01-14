declare global {
  abstract class Application<Options extends ApplicationOptions = ApplicationOptions> {
    constructor(options: Options);

    static get defaultOptions(): ApplicationOptions;

    get element(): JQuery;
    get rendered(): boolean;
    get position(): Application.Position;
    setPosition(position?: Partial<Omit<Application.Position, 'height'> & {
      height: 'auto' | number | null
    }>): Application.Position;

    render(force?: boolean, options?: Application.RenderOptions): this;
  }

  namespace Application {
    type Position = {
      left: number | null
      top: number | null
      width: number | null
      height: number | null
      scale: number | null
    };

    type RenderOptions = {
      left: number
      top: number
      width: number
      height: number
      scale: number
      focus: boolean
      renderContext: string
      renderData: unknown
    };
  }
}

export {};
