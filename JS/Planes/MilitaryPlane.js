const Plane = require('./plane');

class MilitaryPlane extends Plane {
    constructor(parameters) {
        super(parameters);
        this.militaryType = parameters.militaryType;
    }

    getMilitaryType() {
        return this.militaryType;
    }
}

module.exports = MilitaryPlane;