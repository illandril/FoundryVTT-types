declare global {
  interface UI {
    notifications: Notifications
    hotbar: Hotbar
  }
  const game: Game;
  const ui: UI;

  interface Window {
    game: typeof game
    jQuery: typeof jQuery
    ui: typeof ui
  }
}

export {};
