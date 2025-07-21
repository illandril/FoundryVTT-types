declare global {
  namespace foundry {
    namespace applications {
      namespace hud {
        class HeadsUpDisplayContainer extends foundry.applications.api.ApplicationV2 {
          get token(): TokenHUD;
          get tile(): TileHUD;
          get drawing(): DrawingHUD;
        }
      }
    }
  }
}

export type {};
