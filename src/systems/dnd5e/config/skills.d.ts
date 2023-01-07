
declare global {
  namespace dnd5e {
    namespace config {
      interface skills {
        acr: dnd5e.config.skills.Type
        ani: dnd5e.config.skills.Type
        arc: dnd5e.config.skills.Type
        ath: dnd5e.config.skills.Type
        dec: dnd5e.config.skills.Type
        his: dnd5e.config.skills.Type
        ins: dnd5e.config.skills.Type
        inv: dnd5e.config.skills.Type
        itm: dnd5e.config.skills.Type
        med: dnd5e.config.skills.Type
        nat: dnd5e.config.skills.Type
        per: dnd5e.config.skills.Type
        prc: dnd5e.config.skills.Type
        prf: dnd5e.config.skills.Type
        rel: dnd5e.config.skills.Type
        slt: dnd5e.config.skills.Type
        ste: dnd5e.config.skills.Type
        sur: dnd5e.config.skills.Type
      }

      namespace skills {
        type Type = {
          label: string
          ability: keyof dnd5e.config.abilities
          toString: () => string
        };
      }

      const skills: skills;
    }
  }
}

export {};
