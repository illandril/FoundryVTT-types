declare global {
  type SpeakerType = {
    scene?: string;
    actor?: string;
    token?: string;
    alias?: string;
  };
  namespace foundry {
    namespace documents {
      class BaseChatMessage extends foundry.abstract.Document {
        get author(): BaseUser;
        get speaker(): SpeakerType;
      }
    }
  }
}

export type {};
