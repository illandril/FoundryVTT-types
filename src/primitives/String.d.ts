declare global {
  interface String {
    capitalize: () => string
    titleCase: () => string
  }
}

export {};
