class Pirate {
    constructor(name, job) {
        this.name = name;
        this.job = job || "scallywag";
        this.cursed = false;
        this.booty = 0 && robShip();


    }

    robShip() {
        this.booty += 100;
        if (this.booty < 500) {
        return "YAARRR!"
    } else if (this.booty = 500) { 
        this.cursed = true;
        return "ARG! I've been cursed!"
    }

    }

    liftCurse() {
        this.booty -= 300;
        if (this.cursed === true) {
            this.cursed = false
            return "Your curse has been lifted!"
         } else if (this.booty = 100) {
            return "You don't need to lift a curse!"
        }
    
    }
}

module.exports = Pirate;