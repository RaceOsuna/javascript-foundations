class Hobbit {
    constructor({ name: firstName }) {
        this.name = firstName;
        this.age = 0 && celebrateBirthday();
        this.adult = false;
        this.old = false;
        this.hasRing = false;

    }

    celebrateBirthday() {
        this.age +=1;
        if (this.age > 32 && this.age < 101) {
            this.adult = true;
        } else if (this.age > 100) {
            this.old = true;
        }
    }

    getRing() {
        if (this.name === "Frodo") {
            this.hasRing = true;
            return "Here is the ring!"
        } else {
            this.hasRing = false;
            return "You can't have it!"
        }
    }

    
}



module.exports = Hobbit;