const Victim = require("./victim");

class Werewolf {
  constructor(name) {
    this.name = name;
    this.form = "human" || "wolf";
    this.hungry = false;
  }
  
  completeTransformation() {
    if (this.form === "human") {
      this.form = "wolf"
      this.hungry = true
      return "Aaa-Woooo!"
    } else if (this.form === "wolf") {
      this.form = "human"
      this.hungry = false
      return "Where are I?"
    }
  }

  eatVictim(snack) {
    if (this.hungry === true) { 
      snack.alive = false;
      this.form = "human"
    return `Yum, ${snack.name} was delicious.`
    } else if (this.form === "human") {
      return `No way am I eating ${snack.name}, I'd like a burger!`
    }
    }
  }




module.exports = Werewolf;
