import './abilities';
import './abilityActivationTypes';
import './abilityConsumptionTypes';
import './actorSizes';
import './characterFlags';
import './conditionTypes';
import './consumableTypes';
import './currencies';
import './damageTypes';
import './distanceUnits';
import './hitDieTypes';
import './itemActionTypes';
import './limitedUsePeriods';
import './maxLevel';
import './movementTypes';
import './movementUnits';
import './physicalWeaponProperties';
import './senses';
import './skills';
import './spellcastingTypes';
import './spellLevels';
import './spellPreparationModes';
import './spellProgression';
import './spellScalingModes';
import './spellSchools';
import './targetTypes';
import './timePeriods';

declare global {
  namespace CONFIG {
    const DND5E: typeof dnd5e.config;
  }
}
