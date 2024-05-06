declare global {
  namespace dnd5e {
    namespace config {
      interface spellSchools {
        abj: string;
        con: string;
        div: string;
        enc: string;
        evo: string;
        ill: string;
        nec: string;
        trs: string;
      }
      const spellSchools: spellSchools;
    }
  }
}

export type {};
