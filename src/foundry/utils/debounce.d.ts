declare global {
  namespace foundry {
    namespace utils {
      const debounce: <T>(callback: (...args: T) => void, delay: number) => (...args: T) => void;
    }
  }
}

export {};
