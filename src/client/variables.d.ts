declare global {
  const game: Game;
  const ui: {
    notifications: Notifications
  };

  interface Window {
    game: typeof game
    jQuery: typeof jQuery
    ui: typeof ui
  }
}

export {};
