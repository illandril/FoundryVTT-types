declare global {
  namespace dnd5e {
    namespace config {
      interface timePeriods {
        day: string
        hour: string
        inst: string
        minute: string
        month: string
        perm: string
        round: string
        spec: string
        turn: string
        year: string
      }
      const timePeriods: timePeriods;
    }
  }
}

export {};
