import { type ArmorDefinition } from "./armors";
import { ItemType } from "../utils/objectDefinitions";
import { ArmorType } from "../constants";

export const Vests: ArmorDefinition[] = [
    {
        idString: "basic_vest",
        name: "Basic Vest",
        itemType: ItemType.Armor,
        armorType: ArmorType.Vest,
        level: 1,
        damageReductionPercentage: 0.2
    },
    {
        idString: "bulletproof_vest",
        name: "Bulletproof Vest",
        itemType: ItemType.Armor,
        armorType: ArmorType.Vest,
        level: 2,
        damageReductionPercentage: 0.35
    },
    {
        idString: "tactical_vest",
        name: "Tactical Vest",
        itemType: ItemType.Armor,
        armorType: ArmorType.Vest,
        level: 3,
        damageReductionPercentage: 0.45
    }
];
