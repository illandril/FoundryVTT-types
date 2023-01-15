declare global {
  namespace dnd5e {
    namespace config {
      interface abilities {
        str: string
        dex: string
        con: string
        int: string
        wis: string
        cha: string
      }
      const abilities: abilities;
    }
  }
}

export {};
