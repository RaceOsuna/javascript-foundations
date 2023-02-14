var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  gazeAtVictim(victim) {
    victim = new Statue(victim.name);
    this.statues.push(victim)
  if (this.statues.length > 3) {
    victim = this.statues.shift()
    victim = new Person(victim.name)
    victim.mood = "relieved"
  return victim
  }
 }
}





module.exports = Medusa;
