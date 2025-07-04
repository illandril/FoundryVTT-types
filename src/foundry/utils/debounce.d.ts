declare global {
  namespace foundry {
    namespace utils {
      const debounce: <T extends unknown[]>(callback: (...args: T) => void, delay: number) => (...args: T) => void;
    }
  }
}

export type {};
