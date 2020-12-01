const Plane = require('./plane');

class ExperimentalPlane extends Plane {

    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity, experimentalType, classificationLevel)  {
        super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this.experimentalType = experimentalType;
        this.classificationLevel = classificationLevel;
    }

    getExperimentalType() {
        return this.experimentalType;
    }

    getClassificationLevel() {
        return this.classificationLevel;
    }
}

module.exports = ExperimentalPlane;