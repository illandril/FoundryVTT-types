declare global {
  namespace pf2e {
    namespace internal {
      namespace actor {
        class ActorSpellcasting extends foundry.utils.Collection<string, item.spellcastingEntry.SpellcastingEntryPF2e> {
        }
      }
    }
  }
}
export {};
