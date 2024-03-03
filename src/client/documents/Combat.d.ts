import { ClientDocument } from './ClientDocument';

declare global {

  class Combat extends foundry.documents.BaseCombat implements ClientDocument {
    isOwner: ClientDocument['isOwner'];
    hasPlayerOwner: ClientDocument['hasPlayerOwner'];
    visible: ClientDocument['visible'];
    prepareDerivedData: ClientDocument['prepareDerivedData'];
    render: ClientDocument['render'];
    update: ClientDocument['update'];

    get started(): boolean;
    get combatant(): Combatant | null | undefined;
    get scene(): Scene | null | undefined;

    getCombatantByActor(actorOrId: string | Actor): Combatant | null | undefined;
  }
}

export {};
