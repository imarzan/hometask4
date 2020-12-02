const Plane = require('./plane');

class PassengerPlane extends Plane {
    constructor(parameters) {
        super(parameters);
        this.passengersCapacity = parameters.passengersCapacity;
    }

    getPassengersCapacity() {
        return this.passengersCapacity;
    }
}

module.exports = PassengerPlane;