class Dragon {
    constructor(name, rider) {
      this.name = name;
      this.rider = rider;
      this.hungry = true;
      this.snack = 0
    }

    greet() {
        return `Hi, ${this.rider}!`;
    }

    eat() {
        this.snack += 1;
        if (this.snack > 2) {
            this.hungry = false
        }

    }
    

}

module.exports = Dragon;