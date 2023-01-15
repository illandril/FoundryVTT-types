import { ClientDocument } from './ClientDocument';

declare global {
  class User extends foundry.documents.BaseUser implements ClientDocument {
    isOwner: ClientDocument['isOwner'];
    hasPlayerOwner: ClientDocument['hasPlayerOwner'];
    visible: ClientDocument['visible'];
    prepareDerivedData: ClientDocument['prepareDerivedData'];
    render: ClientDocument['render'];

    get viewedScene(): string | null;
  }
}

export {};
