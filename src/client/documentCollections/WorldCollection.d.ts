declare global {
  class WorldCollection<K, V extends foundry.abstract.Document> extends DocumentCollection<K, V> {}
}

export type {};
