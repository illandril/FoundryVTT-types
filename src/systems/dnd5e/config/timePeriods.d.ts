declare global {
  namespace dnd5e {
    namespace config {
      interface timePeriods {
        day: 'Days'
        hour: 'Hours'
        inst: 'Instantaneous'
        minute: 'Minutes'
        month: 'Months'
        perm: 'Permanent'
        round: 'Rounds'
        spec: 'Special'
        turn: 'Turns'
        year: 'Years'
      }
    }
  }
}

export {};
