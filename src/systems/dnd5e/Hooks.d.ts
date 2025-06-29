type ComputeSpellcastingProgressionCallback = (
  progression: { slot: number; pact: number },
  actor: dnd5e.documents.Actor5e,
  cls: dnd5e.documents.Item5e,
  spellcasting: dnd5e.documents.ItemSystemData.SpellcastingDescription,
  count: number,
) => boolean;

type PrepareSpellcastingSlotsCallback = (
  spells: dnd5e.documents.ActorSystemData.Character['spells'],
  actor: dnd5e.documents.Actor5e,
  progression: { slot: number; pact: number },
) => boolean;

declare global {
  interface HookCallbacks {
    renderActorSheet5e: (actorSheet: ActorSheet<dnd5e.documents.Actor5e>, element: JQuery) => void;
    renderActorSheet5eCharacter: (actorSheet: ActorSheet<dnd5e.documents.Actor5e>, element: JQuery) => void;
    renderActorSheet5eNPC: (actorSheet: ActorSheet<dnd5e.documents.Actor5e>, element: JQuery) => void;
    renderActorSheet5eVehicle: (actorSheet: ActorSheet<dnd5e.documents.Actor5e>, element: JQuery) => void;

    'dnd5e.computePactProgression': ComputeSpellcastingProgressionCallback;
    'dnd5e.computeLeveledProgression': ComputeSpellcastingProgressionCallback;
    'dnd5e.preparePactSlots': PrepareSpellcastingSlotsCallback;
  }
}

export type {};
