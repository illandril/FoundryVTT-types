declare global {
  class DocumentCollection<K, V extends foundry.abstract.Document> extends foundry.utils.Collection<K, V> {}
}

export type {};
