declare global {
  namespace dnd5e {
    namespace config {
      interface targetTypes {
        ally: string;
        any: string;
        cone: string;
        creature: string;
        creatureOrObject: string;
        cube: string;
        cylinder: string;
        enemy: string;
        line: string;
        object: string;
        radius: string;
        self: string;
        space: string;
        sphere: string;
        square: string;
        wall: string;
        willing: string;
      }
      const targetTypes: targetTypes;
    }
  }
}

export type {};
