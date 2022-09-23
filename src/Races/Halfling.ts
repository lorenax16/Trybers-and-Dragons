import Race from './Races';

class Halfling extends Race {
  static count = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.count += 1;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling.count;
  }
}

export default Halfling;