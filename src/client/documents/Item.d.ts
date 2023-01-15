import { ClientDocument } from './ClientDocument';

declare global {

  class Item extends foundry.documents.BaseItem implements ClientDocument {
    isOwner: ClientDocument['isOwner'];
    hasPlayerOwner: ClientDocument['hasPlayerOwner'];
    visible: ClientDocument['visible'];
    prepareDerivedData: ClientDocument['prepareDerivedData'];
    render: ClientDocument['render'];

    get actor(): Actor | null;
  }
}

export {};
