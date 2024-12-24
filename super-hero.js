class SuperHero {
  constructor(name) {
    this.name = name;
    this.age = 30;
  }

  getName() {
    return this.name;
  }

  setName(newName){
    this.name = newName;
  }

  getAge() {
    return this.age;
  }
}

module.exports = SuperHero;