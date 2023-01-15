declare global {
  namespace foundry {
    namespace utils {
      const getProperty: <T extends object>(obj: T, key: string) => unknown | undefined;
    }
  }
}

export {};
