declare global {
  class Localization {
    /**
     * Return whether a certain string has a known translation defined.
     * @param stringId The string key being translated
     * @param  fallback Allow fallback translations to count?
     */
    has(stringId: string, fallback?: boolean): boolean;

    /**
     * Localize a string by drawing a translation from the available translations dictionary, if available
     * If a translation is not available, the original string is returned
     * @param stringId The string ID to translate
     */
    localize(stringId: string): string;

    /**
     * Localize a string including variable formatting for input arguments.
     * Provide a string ID which defines the localized template.
     * Variables can be included in the template enclosed in braces and will be substituted using those named keys.
     *
     * @param stringId The string ID to translate
     * @param data Provided input data
     */
    format(stringId: string, data?: Record<string, string>): string;
  }
}

export {};
