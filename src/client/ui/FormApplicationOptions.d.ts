declare global {
  type FormApplicationOptions = ApplicationOptions & {
    closeOnSubmit: boolean;
    editable: boolean;
    sheetConfig: boolean;
    submitOnChange: boolean;
    submitOnClose: boolean;
  };
}

export type {};
