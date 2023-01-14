declare global {
  class FormApplication<ObjectType = never, Options extends FormApplicationOptions = FormApplicationOptions> extends Application<Options> {
    constructor(object?: ObjectType, options?: Options);

    static get defaultOptions(): FormApplicationOptions;

    get isEditable(): boolean;

    getData(options?: Options): object;
    activateListeners(html: JQuery);

    async _updateObject(event: Event, formData: object): Promise<void>;
  }
}

export {};
