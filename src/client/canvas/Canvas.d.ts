declare global {
  class Canvas {
    get ready(): boolean;
    get tokens(): TokenLayer | undefined;
  }
}

export {};
