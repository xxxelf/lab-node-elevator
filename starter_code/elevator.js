class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 3;
    this.requests = [];
    this.direction = "Up";
    this.waitingList = [];
    this.passengers = [];
  }

  start(passenger) {
    this.interval = setInterval(() => {
      this.update(passenger);
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
  }

  update(passenger) {
    this.log();
    this.checkFloorLimits();
    this._passengersEnter(passenger);
    this._checkIfLeave(passenger);
    // this._passengersLeave(passenger);
    this.stop();
  }

  _checkIfLeave() {
    for (let kk = 0; kk < this.requests.length; kk++) {
      if (this.requests[kk] == this.floor) {
        this._passengersLeave();
      } else {
      }
    }
  }

  _passengersEnter(passenger) {
    for (let ix = 0; ix < this.waitingList.length; ix++) {
      if (this.waitingList[ix].originalFloor == this.floor) {
        this.passengers.push(this.passenger[ix]);
        this.waitingList.pop(passenger[ix]);
        console.log(this.passenger[ix].name + " has entered the elevator");
      }
    }
  }

  _passengersLeave(passenger) {
    for (var ix = 0; ix < this.passengers; ix++) {
      if (passengers[ix].destinationFloor == this.floor) {
        console.log(passenger.name + "has left the elevator");
        this.passengers.pop(passenger[ix]);
        this.stop();
      }
    }
  }

  floorUp() {
    this.floor += 1;
    this.direction = "Up";
  }

  floorDown() {
    this.floor -= 1;
    this.direction = "Down";
  }

  call(passenger) {
    this.waitingList.push(passenger);
    this.requests.push(passenger.destinationFloor);
  }

  log() {
    console.log("Direction: " + this.direction + "|" + "Floor: " + this.floor);
  }

  checkFloorLimits() {
    if (this.floor < this.MAXFLOOR && this.direction == "Up") {
      this.floorUp();
    } else {
      if (this.floor == 0) {
        this.floorUp();
      } else {
        this.floorDown();
      }
    }
  }
}

module.exports = Elevator;

// const elevator = new Elevator();
// elevator.start();
// elevator.floorUp();
// elevator.floorUp();
// elevator.floorUp();
// elevator.floorDown();
// elevator.update();
