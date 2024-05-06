declare global {
  class FormApplication<
    ObjectType extends object = object,
    Options extends FormApplicationOptions = FormApplicationOptions,
  > extends Application<Options> {
    constructor(object?: ObjectType, options?: Options);

    static get defaultOptions(): FormApplicationOptions;

    object: ObjectType;

    get isEditable(): boolean;

    getData(options?: Options): object;
    activateListeners(html: JQuery): void;

    _updateObject(event: Event, formData: object): Promise<void>;
  }

  interface Window {
    FormApplication: typeof FormApplication;
  }
}

export type {};
