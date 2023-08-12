declare global {
  class Scenes extends WorldCollection<string, Scene> {
    get active(): Scene | undefined;
    get current(): Scene | undefined;
    get viewed(): Scene | undefined;
  }
}

export {};
