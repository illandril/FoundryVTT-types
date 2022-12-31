type Currency = {
  label: string
  abbreviation: string
  conversion?: {
    into: string
    each: number
  }
};

declare global {
  namespace dnd5e {
    namespace config {
      interface currencies {
        cp: Currency
        ep: Currency
        gp: Currency
        pp: Currency
        sp: Currency
      }
    }
  }
}

export {};
