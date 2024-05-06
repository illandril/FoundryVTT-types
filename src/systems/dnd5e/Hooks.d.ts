declare global {
  interface HookCallbacks {
    renderActorSheet5e: (actorSheet: ActorSheet<dnd5e.documents.Actor5e>, element: JQuery) => void;
    renderActorSheet5eCharacter: (actorSheet: ActorSheet<dnd5e.documents.Actor5e>, element: JQuery) => void;
    renderActorSheet5eNPC: (actorSheet: ActorSheet<dnd5e.documents.Actor5e>, element: JQuery) => void;
    renderActorSheet5eVehicle: (actorSheet: ActorSheet<dnd5e.documents.Actor5e>, element: JQuery) => void;
  }
}

export type {};
