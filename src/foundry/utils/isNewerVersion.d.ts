declare global {
  namespace foundry {
    namespace utils {
      const isNewerVersion: (v1: string | number, v0: string | number) => boolean;
    }
  }
}

export {};
