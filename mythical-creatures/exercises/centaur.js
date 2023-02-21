class Centaur {
  constructor(details) {
    this.name = details.name;
    this.breed = details.type;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.activity = 0
  
 }

  shootBow() {
    this.activity += 1;
  if (this.activity > 2 || this.layingDown === true) {
    this.cranky = true;
  return "NO!"
} else {
  return "Twang!!!" 
 }
}

  run() {
  this.activity += 1
  if (this.activity > 2 || this.layingDown === true) {
    this.cranky = true;
  return "NO!"
} else {
  return "Clop clop clop clop!!!"
 }
}
 
  sleep() {
  if (this.layingDown === true) {
    this.activity = 0
    this.cranky = false;
   return "ZZZZ"
} else {
  this.standing = true
  return "NO!"
}
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }
 
standUp() {
  this.layingDown = false;
  this.standing = true;
 }

 drinkPotion() {
  if (this.standing === true){
  this.activity = 0
  this.cranky = false;
  } else {
    return `Not while I'm laying down!`
  }
 }
}



module.exports = Centaur;