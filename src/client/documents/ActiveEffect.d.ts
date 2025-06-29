import type { ClientDocument } from './ClientDocument';

declare global {
  class ActiveEffect extends foundry.documents.BaseActiveEffect implements ClientDocument {
    isOwner: ClientDocument['isOwner'];
    hasPlayerOwner: ClientDocument['hasPlayerOwner'];
    visible: ClientDocument['visible'];
    prepareData: ClientDocument['prepareData'];
    prepareDerivedData: ClientDocument['prepareDerivedData'];
    render: ClientDocument['render'];
    update: ClientDocument['update'];
  }
}
