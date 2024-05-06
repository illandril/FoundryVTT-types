declare global {
  class DocumentSheet<
    ObjectType extends object = object,
    Options extends DocumentSheetOptions = DocumentSheetOptions,
  > extends FormApplication<ObjectType, Options> {}
}

export type {};
