declare global {
  namespace foundry {
    namespace CONST {
      const CHAT_MESSAGE_TYPES: {
        EMOTE: number
        IC: number
        OOC: number
        OTHER: number
        ROLL: number
        WHISPER: number
      };
    }
  }
}

export {};
