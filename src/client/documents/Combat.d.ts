import { ClientDocument } from './ClientDocument';

declare global {

  class Combat extends foundry.documents.BaseCombat implements ClientDocument {
    isOwner: ClientDocument['isOwner'];
    hasPlayerOwner: ClientDocument['hasPlayerOwner'];
    visible: ClientDocument['visible'];
    prepareDerivedData: ClientDocument['prepareDerivedData'];
    render: ClientDocument['render'];

    get started(): boolean;
    get combatant(): Combatant;
    get scene(): Scene;
  }
}

export {};
