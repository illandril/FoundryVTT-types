declare global {
  namespace foundry {
    namespace applications {
      namespace types {
        interface ApplicationFormConfiguration {
          closeOnSubmit: boolean;
          handler: ApplicationFormSubmission;
          submitOnChange: boolean;
        }
      }
    }
  }
}

export type {};
