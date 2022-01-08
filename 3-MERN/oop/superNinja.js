/* Sensei Class

Extend the Ninja class and create the Sensei class. A Sensei should have 200 Health, 10 speed, and 10 strength by default. In addition, a Sensei should have a new attribute called wisdom, and the default should be 10. Finally, add the speakWisdom() method. speakWisdom() should call the drinkSake() method from the Ninja class, before console.logging a wise message.
*/

class Ninja {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;
  }

  sayName() {
    console.log(this.name);
    return this;
  }

  showStats() {
    this.sayName();
    console.log(`Health: ${this.health}`);
    console.log(`Speed: ${this.speed}`);
    console.log(`Strength: ${this.strength}`);
    return this;
  }

  drinkSake() {
    return this.health > (this.health - 10) ? this.health = this.health : this.health += 10;
  }
}


class Sensei extends Ninja {
  constructor(name) {
    super(name);
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
    this.wisdom = 10;
  }

  speakWisdom() {
    this.drinkSake();
    console.log(`A ninja must see the underneath.`);
  }
}


// const ninja1 = new Ninja("Naruto");
// ninja1.sayName();
// ninja1.drinkSake();
// ninja1.showStats();

const superSensei = new Sensei("Kakashi");
superSensei.speakWisdom();
superSensei.showStats();
