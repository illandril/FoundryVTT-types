declare global {
  namespace foundry {
    namespace CONST {
      type DocumentOwnershipKey = keyof typeof DOCUMENT_OWNERSHIP_LEVELS;
      type DocumentOwnershipNumber = (typeof DOCUMENT_OWNERSHIP_LEVELS)[DocumentOwnershipKey];
      type DocumentOwnershipLevel = DocumentOwnershipKey | DocumentOwnershipNumber;

      const DOCUMENT_OWNERSHIP_LEVELS: {
        INHERIT: number;
        NONE: number;
        LIMITED: number;
        OBSERVER: number;
        OWNER: number;
      };
    }
  }
}

export type {};
