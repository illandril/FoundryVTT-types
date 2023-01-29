declare global {
  namespace pf2e {
    namespace internal {
      namespace item {
        namespace spellcastingEntry {
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
