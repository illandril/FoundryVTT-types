declare global {
  namespace dnd5e {
    namespace config {
      interface targetTypes {
        ally: string
        cone: string
        creature: string
        cube: string
        cylinder: string
        enemy: string
        line: string
        none: string
        object: string
        radius: string
        self: string
        space: string
        sphere: string
        square: string
        wall: string
      }
      const targetTypes: targetTypes;
    }
  }
}

export {};
