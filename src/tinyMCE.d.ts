import { TinyMCE } from 'tinymce';

declare global {
  const tinyMCE: TinyMCE;

  interface Window {
    tinyMCE: typeof tinyMCE
  }
}
