declare global {
  abstract class Application {
    get element(): JQuery;
    get rendered(): boolean;
    get position(): Application.Position;
    setPosition(position?: Omit<Application.Position, 'height'> & {
      height: 'auto' | number | null
    }): Application.Position;
  }

  namespace Application {
    type Position = {
      left: number | null
      top: number | null
      width: number | null
      height: number | null
      scale: number | null
    };
  }
}

export {};
