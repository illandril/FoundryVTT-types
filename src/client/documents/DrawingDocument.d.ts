import type { ClientDocument } from './ClientDocument';

declare global {
  class DrawingDocument extends foundry.documents.BaseDrawing implements ClientDocument {
    isOwner: ClientDocument['isOwner'];
    hasPlayerOwner: ClientDocument['hasPlayerOwner'];
    visible: ClientDocument['visible'];
    prepareDerivedData: ClientDocument['prepareDerivedData'];
    render: ClientDocument['render'];
    update: ClientDocument['update'];
  }
}

export {};
