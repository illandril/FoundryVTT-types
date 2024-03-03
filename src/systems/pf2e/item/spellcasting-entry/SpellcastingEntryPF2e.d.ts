declare global {
  namespace pf2e {
    namespace internal {
      namespace item {
        namespace spellcastingEntry {
          // https://github.com/foundryvtt/pf2e/blob/ef0cbc029b5448935b693311698bbf51d5b7438a/src/module/item/spellcasting-entry/document.ts#L17
          class SpellcastingEntryPF2e extends ItemPF2e {
            get isFocusPool(): boolean;
            /** @deprecated since 5.12.0 */
            getSpellData(): Promise<SpellcastingSheetData>;
            getSheetData(opts?: { prepList?: boolean }): Promise<SpellcastingSheetData>;
          }
        }
      }
    }
  }
}
export {};
