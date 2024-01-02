import { ClientDocument } from './ClientDocument';

declare global {
  class ActiveEffect extends foundry.documents.BaseActiveEffect implements ClientDocument {
    isOwner: ClientDocument['isOwner'];
    hasPlayerOwner: ClientDocument['hasPlayerOwner'];
    visible: ClientDocument['visible'];
    prepareDerivedData: ClientDocument['prepareDerivedData'];
    render: ClientDocument['render'];
    update: ClientDocument['update'];
  }
}

export {};
