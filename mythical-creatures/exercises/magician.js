class Magician {
    constructor(details) {
        this.name = `The Great ${details.name}`;
        this.assistant = details.assistant;
        this.favoriteAccessory = details.clothing || "top hat";
        this.confidencePercentage = 10;
        this.spell = "ABRACADABRA!";
        this.charm = "ALLAKAZAAM!";
    }

    performIncantation(phrase) {
        if (phrase === "abracadabra") {
            return this.spell;
        } else if (phrase === "allakazaam") {
            return this.charm;
        }
    }

    performTrick() {
          this.confidencePercentage += 10;
      if (this.favoriteAccessory === "cape") {
          return "PULL RABBIT FROM CAPE"
      } else if (this.favoriteAccessory === "top hat"){
          return "PULL RABBIT FROM TOP HAT"
        }
    }
    
    performShowStopper() {
        if (this.assistant === false || this.confidencePercentage < 100) {
            return 'Oh no, this trick is not ready!'
    }   else if (this.confidencePercentage = 100 && this.assistant === true) {
            return 'WOW! The magician totally just sawed that person in half!'
    } 
    }
}
    



module.exports = Magician;