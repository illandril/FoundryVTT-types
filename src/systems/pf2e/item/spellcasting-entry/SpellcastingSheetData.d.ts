type UnusedProperties = 'actor' | 'spells' | 'getSheetData' | 'cast' | 'canCast';
type OptionalProperties = 'isFlexible' | 'isFocusPool' | 'isInnate' | 'isPrepared' | 'isRitual' | 'isSpontaneous';

declare global {
  namespace pf2e {
    namespace internal {
      namespace item {
        namespace spellcastingEntry {
          // https://github.com/foundryvtt/pf2e/blob/ef0cbc029b5448935b693311698bbf51d5b7438a/src/module/item/spellcasting-entry/types.ts#L66
          interface SpellcastingSheetData extends Omit<BaseSpellcastingEntry<pf2e.internal.actor.ActorPF2e>, 'statistic' | OptionalProperties | UnusedProperties>, SpellCollectionData {
            // statistic: StatisticChatData | null;
            hasCollection: boolean
            isFlexible?: boolean
            isFocusPool?: boolean
            isInnate?: boolean
            isPrepared?: boolean
            isRitual?: boolean
            isSpontaneous?: boolean
            usesSpellProficiency: boolean
            showSlotlessLevels?: boolean
          }
        }
      }
    }
  }
}
export {};
