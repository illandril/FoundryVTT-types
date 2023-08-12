declare global {
  namespace foundry {
    namespace documents {
      type BaseCombatantFields = {
        hidden: boolean
      };

      class BaseCombatant extends foundry.abstract.Document {
        get hidden(): BaseCombatantFields['hidden'];
      }
    }
  }
}

export {};
