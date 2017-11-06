const Elevator = require("./elevator.js");
const Person = require("./person.js");
let elevator = new Elevator();
let passenger = new Person("benni", 0, 2);
elevator.start();
elevator.call(passenger);
