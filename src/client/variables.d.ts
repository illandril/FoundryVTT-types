declare global {
  interface UI {
    notifications: Notifications;
    hotbar: foundry.applications.ui.Hotbar;
    windows?: Record<number, Application | undefined>;
  }
  const game: foundry.Game;
  const ui: UI;

  interface Window {
    game: typeof game;
    jQuery: typeof jQuery;
    ui: typeof ui;
  }
}

export type {};
