declare global {
  namespace foundry {
    namespace documents {
      type BaseItemFields = foundry.abstract.DocumentFields & {
        name: string;
        type: string;
        sort: number;
      };

      class BaseItem extends foundry.abstract.Document {
        static TYPES: string[];
        get name(): BaseItemFields['name'];
        get img(): string | null;
        get type(): BaseItemFields['type'];
        get sort(): BaseItemFields['sort'];
      }
    }
  }
}

export type {};
