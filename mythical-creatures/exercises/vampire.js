class Vampire {
    constructor(name, pet) {
    this.name = name;
    this.thirsty = true;
    this.ouncesDrank = 0;
    this.pet = pet || "bat"
    }
    
    
    drink() {
        this.thirsty = false;
        this.ouncesDrank += 10
        if (this.ouncesDrank < 50) {
            return this.ouncesDrank
        } else if (this.ouncesDrank = 50) {
            return "I'm too full to drink anymore!"
        }
    }


    
}


module.exports = Vampire;