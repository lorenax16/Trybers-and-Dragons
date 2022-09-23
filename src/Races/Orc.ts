import Race from './Races';

class Orc extends Race {
  static count = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.count += 1;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc.count;
  }
}

export default Orc;