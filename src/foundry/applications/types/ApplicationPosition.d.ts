declare global {
  namespace foundry {
    namespace applications {
      namespace types {
        interface ApplicationPosition {
          height: number | 'auto';
          left: number;
          scale: number;
          top: number;
          width: number | 'auto';
          zIndex: number;
        }
      }
    }
  }
}

export type {};
