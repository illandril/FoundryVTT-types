declare global {
  const game: Game;
  interface ui {
    notifications: Notifications
    hotbar: Hotbar
  }

  interface Window {
    game: typeof game
    jQuery: typeof jQuery
    ui: ui
  }
}

export {};
