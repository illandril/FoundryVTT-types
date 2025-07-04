import type { ClientDocument } from './ClientDocument';

declare global {
  class Combatant extends foundry.documents.BaseCombatant implements ClientDocument {
    isOwner: ClientDocument['isOwner'];
    hasPlayerOwner: ClientDocument['hasPlayerOwner'];
    visible: ClientDocument['visible'];
    prepareData: ClientDocument['prepareData'];
    prepareDerivedData: ClientDocument['prepareDerivedData'];
    render: ClientDocument['render'];
    update: ClientDocument['update'];

    get actor(): Actor;
    get token(): TokenDocument | null | undefined;
    get combat(): Combat;
    get name(): string;
    get isNPC(): boolean;
    get isDefeated(): boolean;
  }
}
