declare global {
  namespace pf2e {
    namespace internal {
      namespace actor {
        class ActorPF2e extends Actor {
          get spellcasting(): ActorSpellcasting;
          get combatant(): Combatant | null;
        }
      }
    }
  }
}
export {};
