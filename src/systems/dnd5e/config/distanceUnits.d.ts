declare global {
  namespace dnd5e {
    namespace config {
      interface distanceUnits {
        any: string;
        ft: string;
        km: string;
        m: string;
        mi: string;
        none: string;
        self: string;
        spec: string;
        touch: string;
      }
      const distanceUnits: distanceUnits;
    }
  }
}

export type {};
