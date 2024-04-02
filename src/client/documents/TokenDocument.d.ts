import type { ClientDocument } from './ClientDocument';

declare global {
  class TokenDocument extends foundry.documents.BaseToken implements ClientDocument {
    isOwner: ClientDocument['isOwner'];
    hasPlayerOwner: ClientDocument['hasPlayerOwner'];
    visible: ClientDocument['visible'];
    prepareDerivedData: ClientDocument['prepareDerivedData'];
    render: ClientDocument['render'];
    update: ClientDocument['update'];

    get actor(): Actor;
    get actorLink(): boolean;
    get object(): Token | null | undefined;
    get inCombat(): boolean;
    get combatant(): Combatant | null;
  }
}

export {};
