import Race from './Races';

class Dwarf extends Race {
  static count = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.count += 1;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf.count;
  }
}

export default Dwarf;