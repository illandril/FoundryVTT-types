

type DialogOptions = {
  jQuery?: boolean
};

type CallbackWithOptionalReturn<ReturnType> = (
  element: JQuery | HTMLElement
) => ReturnType | undefined | void;

type DialogButton = {
  icon: string
  label: string
  disabled?: boolean
  callback: CallbackWithOptionalReturn<undefined>
};

type DialogData<ButtonKey extends string> = {
  title: string
  content: string
  buttons: Record<ButtonKey, DialogButton>
  default: ButtonKey
  render?: (element: JQuery | HTMLElement) => void
  close?: (element: JQuery | HTMLElement) => void
};

declare global {
  class Dialog<T extends string> extends Application {
    constructor(data: DialogData<T>, options?: DialogOptions);

    static confirm<ReturnType = void>(options: Pick<DialogData<'yes' | 'no'>, 'title' | 'content' | 'render'> & {
      yes: CallbackWithOptionalReturn<ReturnType>
      no: CallbackWithOptionalReturn<ReturnType>
      defaultYes: boolean
      rejectClose?: boolean
      options?: DialogOptions
    }): Promise<'yes' | 'no' | null | (ReturnType extends void ? null : ReturnType)>;

    static prompt<ReturnType = void>(options: Pick<DialogData<'ok'>, 'title' | 'content' | 'render'> & {
      callback: CallbackWithOptionalReturn<ReturnType>
      label: DialogButton['label']
      rejectClose?: boolean
      options?: DialogOptions
    }): Promise<'ok' | null | (ReturnType extends void ? null : ReturnType)>;

    static wait<ButtonKey extends string, ReturnType = void>(
      data: Omit<DialogData<ButtonKey>, 'buttons'> & {
        buttons: Record<ButtonKey, Omit<DialogButton, 'callback'> & {
          callback: CallbackWithOptionalReturn<ReturnType>
        }>
      },
      options?: DialogOptions,
      renderOptions?: Application.RenderOptions
    ): Promise<ButtonKey | null | (ReturnType extends void ? null : ReturnType)>;
  }
}

export {};
