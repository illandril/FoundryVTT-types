
declare global {
  interface HookCallbacks {
    renderActorSheet5e: (actorSheet: ActorSheet, element: JQuery) => void
    renderActorSheet5eCharacter: (actorSheet: ActorSheet, element: JQuery) => void
    renderActorSheet5eNPC: (actorSheet: ActorSheet, element: JQuery) => void
    renderActorSheet5eVehicle: (actorSheet: ActorSheet, element: JQuery) => void
  }
}

export {};
