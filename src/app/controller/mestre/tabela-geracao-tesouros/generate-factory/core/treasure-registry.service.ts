// core/treasure-registry.service.ts
import { Injectable, Inject } from '@angular/core';
import { TreasureGenerator } from '../generators/treasure-generator';
import { MoneyTreasureGenerator } from '../generators/money-treasure.generator';
import { MiscellaneousItemsTreasureGenerator } from '../generators/miscellaneous-item-treasure.generator';
import { EquipmentTreasureGenerator } from '../generators/equipment-treasure.generator';
import { PotionTreasureGenerator } from '../generators/potion-treasure.generator';
import { MagicEquipmentTreasureGenerator } from '../generators/magic-equipment-treasure.generator';

@Injectable({ providedIn: 'root' })
export class TreasureRegistry {
  // map simples: contextType -> generator (poderia ser dinamicamente registrado)
  private map = new Map<string, TreasureGenerator>();

  constructor(
    moneyGen: MoneyTreasureGenerator,
    miscellaneous: MiscellaneousItemsTreasureGenerator,
    equipment: EquipmentTreasureGenerator,
    potion: PotionTreasureGenerator,
    magicEquipment: MagicEquipmentTreasureGenerator,
  ) {
    this.map.set('money', moneyGen);
    this.map.set('miscellaneous-item', miscellaneous);
    this.map.set('equipment', equipment);
    this.map.set('potion', potion);
    this.map.set('magic-equipment', magicEquipment);
    // registrar mais geradores aqui ou via método register()
  }

  getGenerator(type: string): TreasureGenerator | undefined {
    return this.map.get(type);
  }
}