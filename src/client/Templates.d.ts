import type { TemplateDelegate } from 'handlebars';

declare global {
  const getTemplate: <T extends object>(path: string, id?: string) => Promise<TemplateDelegate<T>>;
  const renderTemplate: <T extends object>(path: string, data: T) => Promise<string>;

  interface Window {
    getTemplate: typeof getTemplate;
    renderTemplate: typeof renderTemplate;
  }
}
