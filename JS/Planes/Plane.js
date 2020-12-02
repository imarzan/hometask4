class Plane {
    constructor(parameters) {
        this.model = parameters.model;
        this.maxSpeed = parameters.maxSpeed;
        this.maxFlightDistance = parameters.maxFlightDistance;
        this.maxLoadCapacity = parameters.maxLoadCapacity;
    }

    getModel() {
        return this.model;
    }

    getMaxSpeed() {
        return this.maxSpeed;
    }

    getMaxFlightDistance() {
        return this.maxFlightDistance;
    }

    getMaxLoadCapacity() {
        return this.maxLoadCapacity;
    }
}

module.exports = Plane;
