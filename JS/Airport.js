const PassengerPlane = require('./planes/passengerPlane');
const MilitaryPlane = require('./planes/militaryPlane');
const MilitaryType = require('./models/militaryType');
const ExperimentalPlane = require('./planes/experimentalPlane');

class Airport {

    constructor(planes) {
        this.planes = planes;
    }

    getPlanes() {
        return this.planes;
    }

    getPassengerPlanes() {
        return this.planes.filter(plane => plane instanceof PassengerPlane);
    }

    getMilitaryPlanes() {
        return this.planes.filter(plane => plane instanceof MilitaryPlane);
    }

    getExperimentalPlanes() {
        return this.planes.filter(plane => plane instanceof ExperimentalPlane);
    }

    getTransportMilitaryPlanes() {
        return this.getMilitaryPlanes().filter(plane => plane.getMilitaryType() == MilitaryType.TRANSPORT);
    }

    getBomberMilitaryPlanes() {
        return this.getMilitaryPlanes().filter(plane => plane.getMilitaryType() == MilitaryType.BOMBER);
    }

    getPassengerPlaneWithMaxPassengersCapacity() {
        let planeWithMaxCapacity = this.getPassengerPlanes()[0];
        for (let plane of this.getPassengerPlanes()) {
            if (plane.getPassengersCapacity() > planeWithMaxCapacity.getPassengersCapacity()) {
                planeWithMaxCapacity = plane;
            }
        }
        return planeWithMaxCapacity;
    }
 
    sortPlanesByMaxFlightDistanceAsc() {
        let planesSortedByMaxFlightDistance = this.getPlanes();
        planesSortedByMaxFlightDistance.sort((planeA, planeB) => 
            (planeA.getMaxFlightDistance() - planeB.getMaxFlightDistance()));
        return planesSortedByMaxFlightDistance;
    }

    sortPlanesByMaxSpeedAsc() {
        let planesSortedByMaxSpeed = this.getPlanes();
        planesSortedByMaxSpeed.sort((planeA, planeB) => 
           (planeA.getMaxSpeed() - planeB.getMaxSpeed()));
        return planesSortedByMaxSpeed;
    }

    sortPlanesByMaxLoadCapacityAsc() {
        let planesSortedByMaxLoadCapacity = this.getPlanes();
        planesSortedByMaxLoadCapacity.sort((planeA, planeB) => 
            (planeA.getMaxLoadCapacity() - planeB.getMaxLoadCapacity()));
        return planesSortedByMaxLoadCapacity;
    }

    static convertToJson(planes) {
        return JSON.stringify(planes);
    }
}

module.exports = Airport;
