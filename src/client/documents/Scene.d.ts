import { ClientDocument } from './ClientDocument';

declare global {

  class Scene extends foundry.documents.BaseScene implements ClientDocument {
    isOwner: ClientDocument['isOwner'];
    hasPlayerOwner: ClientDocument['hasPlayerOwner'];
    visible: ClientDocument['visible'];
    prepareDerivedData: ClientDocument['prepareDerivedData'];
    render: ClientDocument['render'];
  }
}

export {};
