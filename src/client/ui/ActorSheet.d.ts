declare global {
  class ActorSheet<ActorType extends Actor = Actor> extends DocumentSheet {
    get actor(): ActorType;
  }
}

export type {};
