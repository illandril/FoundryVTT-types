declare global {
  namespace pf2e {
    namespace internal {
      namespace item {
        namespace spellcastingEntry {
          // https://github.com/foundryvtt/pf2e/blob/ef0cbc029b5448935b693311698bbf51d5b7438a/src/module/item/spellcasting-entry/types.ts#L11
          interface BaseSpellcastingEntry<TActor extends pf2e.internal.actor.ActorPF2e | null = pf2e.internal.actor.ActorPF2e | null> {
            id: string
            name: string
            actor: TActor
            sort: number
            // category: SpellcastingCategory;
            // attribute?: Maybe<AttributeString>;
            isFlexible: boolean
            isFocusPool: boolean
            isInnate: boolean
            isPrepared: boolean
            isRitual: boolean
            isSpontaneous: boolean
            isEphemeral: boolean
            // statistic?: Statistic | null;
            // /** A related but more-limited statistic for making counteract checks */
            // counteraction?: Statistic | null;
            // tradition: MagicTradition | null;
            // spells: SpellCollection<NonNullable<TActor>> | null;
            // system?: SpellcastingEntrySystemData;

            // getSheetData(options?: GetSheetDataOptions<NonNullable<TActor>>): Promise<SpellcastingSheetData>
            getRollOptions?(prefix: 'spellcasting'): string[]

            // canCast(spell: SpellPF2e, options?: { origin?: PhysicalItemPF2e }): boolean

            // cast(spell: SpellPF2e, options: CastOptions): Promise<void>
          }
        }
      }
    }
  }
}
export {};
