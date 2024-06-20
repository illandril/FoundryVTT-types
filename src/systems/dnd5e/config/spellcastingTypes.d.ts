declare global {
  namespace dnd5e {
    namespace config {
      namespace spellcastingTypes {
        interface leveled {
          label: string;
          img: string;
          progression: Partial<
            Record<
              keyof dnd5e.config.spellProgression,
              {
                label: string;
                divisor: number;
                roundUp?: boolean;
              }
            >
          >;
        }
        const leveled: leveled;

        interface pact {
          label: string;
          img: string;
          shortRest: true;
        }
        const pact: pact;
      }
    }
  }
}

export type {};
