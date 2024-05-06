type SPELL_LEVEL = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

declare global {
  namespace dnd5e {
    namespace documents {
      namespace ActorSystemData {
        type Common = {
          abilities?: Partial<
            Record<
              keyof dnd5e.config.abilities,
              {
                value?: number;
                proficient?: number;
                bonuses?: {
                  check?: string;
                  save?: string;
                };
              }
            >
          >;

          attributes?: {
            ac?: {
              flat?: number | null;
              calc?: 'default' | 'flat' | 'natural' | 'custom';
              formula?: string;
              armor?: number;
              shield?: number;
              bonus?: number;
              cover?: number;
              equippedArmor?: dnd5e.documents.Item5e;
              equippedShield?: dnd5e.documents.Item5e;
              value?: number;
              base?: number;
              dex?: number;
            };

            hp?: {
              value?: number;
              min?: number;
              max?: number;
              temp?: number;
              tempmax?: number;
            };

            init?: {
              value?: number;
              bonus?: number;
            };

            movement?: Partial<Record<keyof dnd5e.config.movementTypes, number>> & {
              units?: keyof dnd5e.config.movementUnits;
              hover?: boolean;
            };
          };

          details?: {
            biography?: {
              value?: string;
              public?: string;
            };
          };

          traits?: Partial<
            Record<
              'di' | 'dr' | 'dv',
              {
                value?: (keyof dnd5e.config.damageTypes)[];
                bypasses?: (keyof dnd5e.config.physicalWeaponProperties)[];
                custom?: string;
              }
            >
          > & {
            size?: keyof dnd5e.config.actorSizes;
            ci?: {
              value?: (keyof dnd5e.config.conditionTypes)[];
              custom?: string;
            };
          };

          currency?: Partial<Record<keyof dnd5e.config.currencies, number>>;
        };

        type Creature = {
          attributes?: {
            attunement?: {
              max?: number;
            };
            senses?: Partial<Record<keyof dnd5e.config.senses, number>> & {
              units?: keyof dnd5e.config.movementUnits;
              special?: string;
            };
            spellcasting?: keyof dnd5e.config.abilities;
          };

          details?: {
            alignment?: string;
            race?: string;
          };

          skills?: Partial<
            Record<
              keyof dnd5e.config.skills,
              {
                value?: number;
                ability?: keyof dnd5e.config.abilities;
                bonuses?: {
                  check?: string;
                  passive?: string;
                };
              }
            >
          >;

          traits?: {
            languages?: {
              value?: unknown[];
              custom?: string;
            };
          };

          spells?: Partial<
            Record<
              `spell${SPELL_LEVEL}` | 'pact',
              {
                value?: number;
                override?: string | number | null;
                max?: number;
              }
            >
          > & {
            pact?: {
              level?: number;
            };
          };

          bonuses?: Partial<
            Record<
              'mwak' | 'rwak' | 'msak' | 'rsak',
              {
                attack?: string;
                damage?: string;
              }
            >
          > & {
            abilities?: {
              check?: string;
              save?: string;
              skill?: string;
            };
            spell?: {
              dc?: string;
            };
          };
        };

        type Character = Common &
          Creature & {
            attributes?: {
              death?: {
                success?: number;
                failure?: number;
              };
              exhaustion?: number;
              inspiration?: number;
            };
            details?: {
              background?: string;
              originalClass?: string;
              xp?: {
                value?: number;
                min?: number;
                max?: number;
              };
              appearance?: string;
              trait?: string;
              ideal?: string;
              bond?: string;
              flaw?: string;
            };
            resources?: Partial<
              Record<
                'primary' | 'secondary' | 'tertiary',
                {
                  value?: number;
                  max?: number;
                  sr?: number;
                  lr?: number;
                }
              >
            >;
            traits?: {
              weaponProf?: {
                value?: unknown[];
                custom?: string;
              };
              armorProf?: {
                value?: unknown[];
                custom?: string;
              };
              toolProf?: {
                value?: unknown[];
                custom?: string;
              };
            };
          };

        type NPC = Common &
          Creature & {
            attributes?: {
              hp?: {
                formula?: string;
              };
            };
            details?: {
              type?: {
                value?: string;
                subtype?: string;
                swarm?: string;
                custom?: string;
              };
              environment?: string;
              cr?: number;
              spellLevel?: number;
              xp?: {
                value?: number;
              };
              source?: string;
            };
            resources?: {
              legact?: {
                value?: number;
                max?: number;
              };
              legres?: {
                value?: number;
                max?: number;
              };
              lair?: {
                value?: number;
                initiative?: number;
              };
            };
          };

        type Vehicle = Common & {
          vehicleType?: 'string';
          attributes?: {
            ac?: {
              motionless?: string;
            };
            actions?: {
              stations?: boolean;
              value?: number;
              thresholds?: unknown;
            };
            hp?: {
              dt?: unknown;
              mt?: unknown;
            };
            capacity?: {
              creature?: string;
              cargo?: number;
            };
          };
          traits?: {
            size?: string;
            dimensions?: string;
          };
          cargo?: {
            crew?: unknown[];
            passengers?: unknown[];
          };
        };

        type Any = Character | NPC | Vehicle;
      }

      class Actor5e extends Actor {
        get effects(): foundry.abstract.EmbeddedCollection<string, dnd5e.documents.ActiveEffect5e>;
        get temporaryEffects(): dnd5e.documents.ActiveEffect5e[];
        get items(): foundry.abstract.EmbeddedCollection<string, dnd5e.documents.Item5e>;
        get system(): dnd5e.documents.ActorSystemData.Any;
        get armor(): dnd5e.documents.Item5e | null;
        get shield(): dnd5e.documents.Item5e | null;
      }
    }
  }
}

export type {};
