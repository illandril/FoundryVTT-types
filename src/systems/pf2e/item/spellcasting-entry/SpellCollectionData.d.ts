declare global {
  namespace pf2e {
    namespace internal {
      namespace item {
        namespace spellcastingEntry {
          // https://github.com/foundryvtt/pf2e/blob/ef0cbc029b5448935b693311698bbf51d5b7438a/src/module/item/spellcasting-entry/collection.ts#L431
          interface SpellCollectionData {
            groups: SpellcastingSlotGroup[]
            flexibleAvailable?: { value: number, max: number } | null
            // prepList: Record<number, SpellPrepEntry[]> | null

            /** @deprecated since version 5.12.0 - use groups instead */
            get levels(): SpellcastingSlotLevel[]

          }
        }
      }
    }
  }
}
export {};
