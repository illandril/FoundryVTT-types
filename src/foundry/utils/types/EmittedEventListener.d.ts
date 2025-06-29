declare global {
  namespace foundry {
    namespace utils {
      namespace types {
        type EmittedEventListener = (event: Event) => unknown;
      }
    }
  }
}

export type {};
