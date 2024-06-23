type SheetTabDescriptor5e = {
  tab: string;
  label: string;
  icon?: string;
  svg?: string;
};
declare global {
  namespace dnd5e {
    namespace application {
      namespace actor {
        class ActorSheet5eCharacter2 extends ActorSheet5eCharacter {
          static MODES: {
            PLAY: number;
            EDIT: number;
          };

          static TABS: SheetTabDescriptor5e[];

          _mode: number;
        }
      }
    }
  }
}

export type {};
