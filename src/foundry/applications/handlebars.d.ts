import type { TemplateDelegate } from 'handlebars';

declare global {
  namespace foundry {
    namespace applications {
      namespace handlebars {
        const getTemplate: <T extends object>(path: string, id?: string) => Promise<TemplateDelegate<T>>;
        const renderTemplate: <T extends object>(path: string, data: T) => Promise<string>;
      }
    }
  }
}
