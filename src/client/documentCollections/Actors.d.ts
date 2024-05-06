declare global {
  class Actors extends WorldCollection<string, Actor> {
    get tokens(): Record<string, Actor>;
  }
}

export type {};
