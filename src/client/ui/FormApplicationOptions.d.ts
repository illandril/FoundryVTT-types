declare global {
  type FormApplicationOptions = ApplicationOptions & {
    editable?: boolean
    sheetConfig?: boolean
    submitOnChange?: boolean
    submitOnClose?: boolean
    closeOnSubmit?: boolean
  };
}

export {};
