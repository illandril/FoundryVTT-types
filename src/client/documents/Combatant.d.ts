import { ClientDocument } from './ClientDocument';

declare global {

  class Combatant extends foundry.documents.BaseCombatant implements ClientDocument {
    isOwner: ClientDocument['isOwner'];
    hasPlayerOwner: ClientDocument['hasPlayerOwner'];
    visible: ClientDocument['visible'];
    prepareDerivedData: ClientDocument['prepareDerivedData'];
    render: ClientDocument['render'];

    get actor(): Actor;
    get token(): TokenDocument;
    get combat(): Combat;
  }
}

export {};
