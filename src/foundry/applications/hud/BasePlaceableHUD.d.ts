declare global {
  namespace foundry {
    namespace applications {
      namespace hud {
        class BasePlaceableHUD<ObjectType extends PlaceableObject<foundry.abstract.Document>> extends foundry
          .applications.api.ApplicationV2 {
          get object(): ObjectType | undefined;
          clear(): void;
        }
      }
    }
  }
}

export type {};
