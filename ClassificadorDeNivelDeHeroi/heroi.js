class Heroi {
  _level = 0;

  constructor(name) {
    this.name = name;
  }

  getXp() {
    return this._level;
  }

  setXP(level) {
    this._level = level;
  }

  getLevel() {
    switch (this.getXp()) {
      case this.getXp() <= 1000:
        return 'Ferro';
      case this.getXp() > 1000 && this.getXp() < 2000:
        return 'Bronze';
      case this.getXp() > 2000 && this.getXp() < 5000:
        return 'Prata';
      case this.getXp() > 5000 && this.getXp() < 6000:
        return 'Ouro';
      case this.getXp() > 6000 && this.getXp() < 7000:
        return 'Platina';
      case this.getXp() > 7000 && this.getXp() < 8000:
        return 'Ascendente';
      case this.getXp() > 8000 && this.getXp() < 9000:
        return 'Imortal';
      case this.getXp() > 9000 && this.getXp() <= 10000:
        return 'Radiante';
      default:
        return 'Sem rank';
    }
  }

  getNome() {
    return this.name;
  }

  getRank() {
    return `${this.getNome()} é um herói de nível ${this.getLevel()}`;
  }
}

const hero = new Heroi('Breach');
hero.setXP(4000);
console.log(hero.getRank());
