declare global {
  namespace dnd5e {
    namespace config {
      interface itemActionTypes {
        mwak: string;
        rwak: string;
        msak: string;
        rsak: string;
        save: string;
        heal: string;
        abil: string;
        util: string;
        other: string;
      }
      const itemActionTypes: itemActionTypes;
    }
  }
}

export type {};
