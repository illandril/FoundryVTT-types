declare global {
  namespace foundry {
    namespace config {
      class ReleaseData {
        /**
         * A formatted string for shortened display, such as "Version 9"
         */
        get shortDisplay(): string;

        /**
         * A formatted string for general display, such as "V9 Prototype 1" or "Version 9"
         */
        get display(): string;

        /**
         * A formatted string for Version compatibility checking, such as "9.150"
         */
        get version(): string;

        /**
         * The maximum known stable generation number.
         */
        get maxStableGeneration(): number;

        isNewer(other: string | ReleaseData): boolean;

        isGenerationalChange(other: string | ReleaseData): boolean;
      }
    }
  }
}

export {};
