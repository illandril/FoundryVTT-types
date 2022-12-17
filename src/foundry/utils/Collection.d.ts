type CollectionFilter<K, V, C extends Map<K, V>> = (value: V, index: number, collection: C) => boolean;

declare global {
  namespace foundry {
    namespace utils {
      class Collection<K, V> extends Map<K, V> {
        constructor(entries?: readonly (readonly [K, V])[] | null);

        [Symbol.iterator](): IterableIterator<V> {
          return this.values();
        }

        get contents(): V[];

        /**
       * Find an entry in the Map using a functional condition.
       */
        find(condition: CollectionFilter<K, V, Collection<K, V>>): V | undefined;

        /**
       * Filter the Collection, returning an Array of entries which match a functional condition.
       */
        filter(condition: CollectionFilter<K, V, Collection<K, V>>): V[];

        /* -------------------------------------------- */

        /**
       * Apply a function to each element of the collection
       */
        forEach(fn: (value: V) => void): void;

        /**
       * Get an element from the Collection by its key.
       * Returns undefined if it does not exist
       */
        get(key: K): V | undefined;

        /**
       * Get an element from the Collection by its key.
       * Throws if it does not exist
       */
        get(key: K, options: { strict: true }): V;

        /**
       * Get an entry from the Collection by name.
       * Use of this method assumes that the objects stored in the collection have a "name" attribute.
       * Returns undefined if it does not exist
       */
        getName(name: string): V | undefined;

        /**
         * Get an entry from the Collection by name.
         * Use of this method assumes that the objects stored in the collection have a "name" attribute.
         * Throws if it does not exist
         */
        getName(name: string, options: { strict: true }): V;

        /**
       * Transform each element of the Collection into a new form, returning an Array of transformed values
       * @param {function(*,number,Collection): *} transformer  A transformation function applied to each entry value.
       * Positional arguments are the value, the index of iteration, and the collection being mapped.
       * @return {Array<*>}  An Array of transformed values
       */
        map<T>(transformer: (value: V, index: number, collection: Collection<K, V>) => T): T[];

        /**
       * Reduce the Collection by applying an evaluator function and accumulating entries
       */
        reduce<T>(reducer: (acc: T, value: V, index: number, collection: Collection<K, V>) => T, initial: T): T;

        /**
       * Test whether a condition is met by some entry in the Collection.
       */
        some(condition: CollectionFilter<K, V, Collection<K, V>>): boolean;
      }
    }
  }
}

export {};
