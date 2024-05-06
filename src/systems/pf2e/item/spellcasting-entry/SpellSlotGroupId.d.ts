declare global {
  namespace pf2e {
    namespace internal {
      namespace item {
        namespace spellcastingEntry {
          // https://github.com/foundryvtt/pf2e/blob/ef0cbc029b5448935b693311698bbf51d5b7438a/src/module/item/spellcasting-entry/collection.ts#L429
          type SpellSlotGroupId = 'cantrips' | number;
        }
      }
    }
  }
}
export type {};
