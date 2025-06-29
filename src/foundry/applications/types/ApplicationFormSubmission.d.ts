declare global {
  namespace foundry {
    namespace applications {
      namespace types {
        type ApplicationFormSubmission = (
          event: SubmitEvent | Event,
          form: HTMLFormElement,
          formData: foundry.applications.ux.FormDataExtended,
        ) => Promise<unknown>;
      }
    }
  }
}

export type {};
