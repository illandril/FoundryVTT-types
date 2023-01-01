

declare global {
  namespace dnd5e {
    namespace documents {
      namespace ItemSystemData {
        type ItemDescription = {
          description?: {
            value?: string
          }
          source?: string
        };

        type PhysicalItem = {
          quantity?: number
          weight?: number
          price?: number
          attunement?: number
          equipped?: boolean
          rarity?: string
          identified?: boolean
        };

        type ActivatedEffect = {
          activation?: {
            type?: keyof dnd5e.config.abilityActivationTypes | '' | null
            cost?: number
            condition?: string
          }
          duration?: {
            value?: number | null
            units?: keyof dnd5e.config.timePeriods | '' | null
          }
          target?: {
            value?: number | null
            width?: number | null
            units?: keyof dnd5e.config.distanceUnits | '' | null
            type?: keyof dnd5e.config.targetTypes | '' | null
          }
          range?: {
            value?: number | null
            long?: number | null
            units?: keyof dnd5e.config.distanceUnits | '' | null
          }
          uses?: {
            value?: number | null
            max?: string | number | null
            per?: keyof dnd5e.config.limitedUsePeriods | '' | null
            recovery?: string
          }
          consume?: {
            type?: keyof dnd5e.config.abilityConsumptionTypes | '' | null
            target?: string | null
            amount?: number | null
          }
        };

        type Action = {
          ability?: keyof dnd5e.config.abilities | null
          actionType?: keyof dnd5e.config.itemActionTypes
          attackBonus?: number
          chatFlavor?: string
          critical?: {
            threshold?: number | null
            damage?: string
          }
          damage?: {
            parts?: unknown[]
            versatile?: string
          }
          formula?: string
          save?: {
            ability?: keyof dnd5e.config.abilities | '' | null
            dc?: number | null
            scaling?: string
          }
        };

        type Mountable = {
          armor?: {
            value?: number
          }
          hp?: {
            value?: number
            max?: number
          }
        };

        type Background = ItemDescription & {
          advancement?: unknown[]
        };

        type Backpack = ItemDescription & PhysicalItem & {
          capacity?: {
            type?: string
            value?: number
            weightless?: boolean
          }
          currency?: Record<keyof dnd5e.config.currencies, number>
        };

        type Class = ItemDescription & {
          levels?: number
          spellcasting?: {
            progression?: keyof dnd5e.config.spellProgression | null | ''
          }
        };

        type Consumable = ItemDescription & PhysicalItem & ActivatedEffect & Action & {
          consumableType?: keyof dnd5e.config.consumableTypes
          uses?: {
            autoDestroy?: boolean
          }
        };

        type Equipment = ItemDescription & PhysicalItem & ActivatedEffect & Action & Mountable & {
          armor?: {
            type?: string
          }
          baseItem?: string
          speed?: {
            value?: unknown
          }
          strength?: number
          stealth?: boolean
          proficient?: boolean
        };

        type Feat = ItemDescription & ActivatedEffect & Action & {
          recharge?: {
            value?: unknown
            charged?: boolean
          }
        };

        type Loot = ItemDescription & PhysicalItem;

        type Tool = ItemDescription & PhysicalItem & {
          toolType?: string
          baseItem?: string
          ability?: keyof dnd5e.config.abilities
        };

        type Spell = ItemDescription & ActivatedEffect & Action & {
          level?: number
          school?: string
          preparation?: {
            mode?: keyof dnd5e.config.spellPreparationModes
            prepared?: boolean
          }

          components?: {
            value?: string
            vocal?: boolean
            somatic?: boolean
            material?: boolean
            ritual?: boolean
            concentration?: boolean
          }

          materials?: {
            value?: string
            consumed?: boolean
            cost?: number
            supply?: number
          }

          scaling?: {
            mode?: keyof dnd5e.config.spellScalingModes
          }
        };

        type Subclass = ItemDescription & {
          identifier?: string
          classIdentifier?: string
          advancement?: unknown[]
          spellcapsting?: {
            progression?: keyof dnd5e.config.spellProgression
            ability?: keyof dnd5e.config.abilities
          }
        };

        type Weapon = ItemDescription & PhysicalItem & ActivatedEffect & Action & Mountable & {
          weaponType?: string
          baseItem?: string
          properties?: unknown
          proficient?: boolean
        };

        type Any = Background | Backpack | Class | Consumable | Equipment | Feat | Loot | Tool | Spell | Subclass | Weapon;
      }

      class Item5e extends Item<Actor5e> {
        get system(): dnd5e.documents.ItemSystemData.Any;
        get type(): 'weapon' | 'equipment' | 'consumable' | 'tool' | 'loot' | 'background' | 'class' | 'subclass' | 'spell' | 'feat' | 'backpack';
      }
    }
  }
}

export {};
