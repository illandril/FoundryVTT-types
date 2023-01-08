declare global {
  const vtt: string;
  const game: Game;
  const jQuery: JQueryStatic;

  interface Window {
    vtt: typeof vtt
    game: typeof game
    jQuery: typeof jQuery
  }
}

export {};
