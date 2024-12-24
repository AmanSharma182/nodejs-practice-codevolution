const SuperHero = require("./super-hero");

const batman = new SuperHero("Batman")
console.log(batman.getName());

batman.setName("Bruce Wayne");
console.log(batman.getName(), batman.getAge());

const superman = new SuperHero("SuperMan")
console.log(superman.getName(), superman.getAge());