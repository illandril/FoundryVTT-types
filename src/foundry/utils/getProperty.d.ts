declare global {
  namespace foundry {
    namespace utils {
      const getProperty: (obj: unknown, key: string) => unknown;
    }
  }
}

export {};
