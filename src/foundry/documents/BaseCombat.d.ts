declare global {
  namespace foundry {
    namespace documents {
      type BaseCombatFields = foundry.abstract.DocumentFields & {
        active: boolean
        round: number
        turn: number
      };

      class BaseCombat extends foundry.abstract.Document {
        get scene(): BaseScene;
        get active(): BaseCombatFields['active'];
        get round(): BaseCombatFields['round'];
        get turn(): BaseCombatFields['turn'];
      }
    }
  }
}

export {};
