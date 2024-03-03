declare global {
  namespace pf2e {
    namespace internal {
      namespace item {
        namespace spellcastingEntry {
          /** @deprecated since version 5.12.0 */
          interface SpellcastingSlotLevel {
            label: string
            level: number
            isCantrip: boolean
            uses?: {
              value?: number
              max: number
            }
          }
        }
      }
    }
  }
}
export {};
