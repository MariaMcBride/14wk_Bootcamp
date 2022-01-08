class Card {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
  }
}

class Unit extends Card {
  constructor(name, cost, power, res) {
    super(name, cost);
    this.power = power;
    this.res = res;
  }

  attack(target) {
    target instanceof Unit ?
      target.res -= this.power :
      new Error("Must target a unit!");
  }
}

class Effect extends Card {
  constructor(name, cost, stat, magnitude) {
    super(name, cost);
    this.stat = stat;
    this.magnitude = magnitude
    magnitude > 0 ?
      this.text = `Increase target's ${this.stat} by ${this.magnitude}` :
      this.text = `Reduce target's ${this.stat} by ${this.magnitude}`;
  }

  play(target) {
    if (target instanceof Unit) {
      if (this.stat.toLowerCase() == "resilience") {
        target.res += this.magnitude;
      }
    } else if (this.stat.toLowerCase() == "power") {
      target.power += this.magnitude;
    } else {
      throw new Error("Target must be a unit!");
    }
  }
}


const redNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackNinja = new Unit("Black Belt Ninja", 4, 5, 4);
console.log(redNinja);
console.log(blackNinja);

const hardAlgo = new Effect("Hard Algorithm", 2, "resilience", +3);
const uPromiseReject = new Effect("Unhandled Promise Rejection", 1, "resilience", -2);
const pairProgramming = new Effect("Pair Programming", 3, "power", +2);
console.log(hardAlgo);
console.log(uPromiseReject);
console.log(pairProgramming);

hardAlgo.play(redNinja);
uPromiseReject.play(redNinja);
pairProgramming.play(redNinja);
redNinja.attack(blackNinja);

console.log(redNinja);
console.log(blackNinja);
