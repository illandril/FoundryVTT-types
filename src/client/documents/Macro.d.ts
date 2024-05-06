import type { ClientDocument } from './ClientDocument';

declare global {
  class Macro extends foundry.documents.BaseMacro implements ClientDocument {
    isOwner: ClientDocument['isOwner'];
    hasPlayerOwner: ClientDocument['hasPlayerOwner'];
    visible: ClientDocument['visible'];
    prepareDerivedData: ClientDocument['prepareDerivedData'];
    render: ClientDocument['render'];
    update: ClientDocument['update'];

    get isAuthor(): boolean;
    get canExecute(): boolean;
  }
}
