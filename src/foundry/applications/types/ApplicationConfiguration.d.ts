declare global {
  namespace foundry {
    namespace applications {
      namespace types {
        interface ApplicationConfiguration {
          actions: Record<string, ApplicationClickAction | { buttons: number[]; handler: ApplicationClickAction }>;
          classes: string[];
          form?: ApplicationFormConfiguration;
          id: string;
          position: Partial<ApplicationPosition>;
          tag: string;
          uniqueId: string;
          window: ApplicationWindowConfiguration;
        }
      }
    }
  }
}

export type {};
