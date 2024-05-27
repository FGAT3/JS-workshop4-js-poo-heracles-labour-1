MAX_LIFE = 100; // est-ce que c'est une var ?

class Fighter {
  constructor(name, strength, dexterity, life) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
  }

  fight(opponent) {
    const damageInflicted = Math.max(
      1,
      Math.round(Math.random() * this.strength)
    );
    const damageAfterDefense = Math.max(
      0,
      damageInflicted - opponent.dexterity
    );
    const lifeAfterDamage = Math.max(0, opponent.life - damageAfterDefense);

    opponent.life = lifeAfterDamage; // modifier la valeur de la vie à chaque itération

    return `${this.name} inflict ${damageAfterDefense} at ${opponent.name}! ${opponent.name} has ${lifeAfterDamage} life points left`;
  }
}

module.exports = Fighter;
