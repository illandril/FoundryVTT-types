declare global {
  namespace pf2e {
    namespace internal {
      namespace item {
        namespace spellcastingEntry {
          // https://github.com/foundryvtt/pf2e/blob/ef0cbc029b5448935b693311698bbf51d5b7438a/src/module/item/spellcasting-entry/types.ts#L81
          interface SpellcastingSlotGroup {
            id: SpellSlotGroupId;
            label: string;
            maxRank: number;
            uses?: {
              value?: number;
              max: number;
            };
            number?: number;
            // active: (ActiveSpell | null)[]

            /** @deprecated since version 5.12.0 - use id instead */
            get level(): number;
            /** @deprecated since version 5.12.0 - use id instead */
            get isCantrip(): boolean;
          }
        }
      }
    }
  }
}
export type {};
