type AstNode = {
  parent?: AstNode
  firstChild?: AstNode
  lastChild?: AstNode
  next?: AstNode
  prev?: AstNode
};

declare global {
  const tinyMCE: {
    html: {
      DomParser: (options: { validate: true }) => { parse(html: string): AstNode }
      Serializer: () => { serialize(node: AstNode): string }
    }
    dom: {
      DOMUtils: {
        DOM: {
          createFragment: (html: string) => DocumentFragment
        }
      }
    }
  };

  interface Window {
    tinyMCE: typeof tinyMCE
  }
}

export {};
