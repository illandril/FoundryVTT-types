declare global {
  interface DocumentModificationContext {
    parent?: foundry.abstract.Document
    pack?: string
    noHook?: boolean
    index?: boolean
    indexFields?: string[]
    keepId?: boolean
    keepEmbeddedIds?: boolean
    temporary?: boolean
    render?: boolean
    renderSheet?: boolean
    diff?: boolean
    recursive?: boolean
    isUndo?: boolean
    deleteAll?: boolean
  }
}

export {};
