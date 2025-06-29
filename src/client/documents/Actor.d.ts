import type { ClientDocument } from './ClientDocument';

declare global {
  class Actor extends foundry.documents.BaseActor implements ClientDocument {
    isOwner: ClientDocument['isOwner'];
    hasPlayerOwner: ClientDocument['hasPlayerOwner'];
    visible: ClientDocument['visible'];
    prepareData: ClientDocument['prepareData'];
    prepareDerivedData: ClientDocument['prepareDerivedData'];
    render: ClientDocument['render'];
    update: ClientDocument['update'];

    get sheet(): ActorSheet | null;
    get effects(): foundry.abstract.EmbeddedCollection<string, ActiveEffect>;
    get temporaryEffects(): ActiveEffect[];
    get items(): foundry.abstract.EmbeddedCollection<string, Item>;
  }
}
