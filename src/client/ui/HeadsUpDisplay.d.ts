declare global {
  class HeadsUpDisplay extends Application {
    get token(): TokenHUD;
    get tile(): TileHUD;
    get drawing(): DrawingHUD;
  }
}

export type {};
