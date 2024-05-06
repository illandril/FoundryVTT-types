declare global {
  namespace foundry {
    namespace documents {
      type BaseCombatantFields = {
        defeated: boolean;
        hidden: boolean;
        initiative: number | null | undefined;
        name: string;
      };

      class BaseCombatant extends foundry.abstract.Document {
        get defeated(): BaseCombatantFields['defeated'];
        get hidden(): BaseCombatantFields['hidden'];
        get initiative(): BaseCombatantFields['initiative'];
        get name(): BaseCombatantFields['name'];
      }
    }
  }
}

export type {};
