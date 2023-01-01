declare global {
  namespace dnd5e {
    namespace config {
      interface targetTypes {
        ally: 'Ally'
        cone: 'Cone'
        creature: 'Creature'
        cube: 'Cube'
        cylinder: 'Cylinder'
        enemy: 'Enemy'
        line: 'Line'
        none: 'None'
        object: 'Object'
        radius: 'Radius'
        self: 'Self'
        space: 'Space'
        sphere: 'Sphere'
        square: 'Square'
        wall: 'Wall'
      }
      const targetTypes: targetTypes;
    }
  }
}

export {};
