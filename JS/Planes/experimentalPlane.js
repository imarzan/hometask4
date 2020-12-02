const Plane = require('./plane');

class ExperimentalPlane extends Plane {
    constructor(parameters)  {
        super(parameters);
        this.experimentalType = parameters.experimentalType;
        this.classificationLevel = parameters.classificationLevel;
    }

    getExperimentalType() {
        return this.experimentalType;
    }

    getClassificationLevel() {
        return this.classificationLevel;
    }
}

module.exports = ExperimentalPlane;