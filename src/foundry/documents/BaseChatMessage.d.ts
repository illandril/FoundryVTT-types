declare global {
  type SpeakerType = {
    scene?: string
    actor?: string
    token?: string
    alias?: string
  };
  namespace foundry {
    namespace documents {
      class BaseChatMessage extends foundry.abstract.Document {
        user: BaseUser;
        speaker: SpeakerType;
      }
    }
  }
}

export {};
