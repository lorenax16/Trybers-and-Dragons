import Race from './Races';

class Elf extends Race {
  static count = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.count += 1;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf.count;
  }
}

export default Elf;