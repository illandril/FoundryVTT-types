import { ClientDocument } from './ClientDocument';

declare global {

  class Actor extends foundry.documents.BaseActor implements ClientDocument {
    isOwner: ClientDocument['isOwner'];
    hasPlayerOwner: ClientDocument['hasPlayerOwner'];
    visible: ClientDocument['visible'];
    prepareDerivedData: ClientDocument['prepareDerivedData'];
    render: ClientDocument['render'];

    get effects(): foundry.abstract.EmbeddedCollection<string, ActiveEffect>;
    get temporaryEffects(): ActiveEffect[];
    get items(): foundry.abstract.EmbeddedCollection<string, Item>;
  }
}

export {};
