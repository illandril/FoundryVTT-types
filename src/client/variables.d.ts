declare global {
  const game: Game;

  interface Window {
    game: typeof game
    jQuery: typeof jQuery
  }
}

export {};
