declare global {
  class FormApplication extends Application {
    get isEditable(): boolean;
  }
}

export {};
