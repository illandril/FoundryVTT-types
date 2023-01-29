declare global {
  namespace pf2e {
    namespace internal {
      namespace item {
        namespace spellcastingEntry {
          class SpellcastingEntryPF2e extends ItemPF2e {
            get isFocusPool(): boolean;
            getSpellData(): Promise<{ levels: SpellcastingSlotLevel[] }>;
          }
        }
      }
    }
  }
}
export {};
