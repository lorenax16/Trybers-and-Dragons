import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  static count = 0;
  
  constructor(_name: string) {
    super(_name);
    this._energyType = 'mana';
    Mage.count += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
  
  static createdArchetypeInstances(): number {
    return Mage.count;
  }
}