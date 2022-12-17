type TYPES = 'character' | 'npc' | 'vehicle';

declare global {
  namespace foundry {
    namespace documents {
      class BaseActor extends foundry.abstract.Document {
        get name(): string;
        get type(): TYPES;
      }
    }
  }
}

export {};
