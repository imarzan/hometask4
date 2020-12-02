const assert = require('chai').assert;
const MilitaryType = require('../models/militaryType');
const ExperimentalTypes = require('../models/experimentalTypes');
const ClassificationLevel = require('../models/classificationLevel');
const MilitaryPlane = require('../planes/militaryPlane');
const PassengerPlane = require('../planes/passengerPlane');
const ExperimentalPlane = require('../planes/experimentalPlane');
const Airport = require('../airport');
const planes = require('../planes');

describe('Smoke test suite for airport:', () => {

    it('at least one military transport plane exists', () => {
        let airport = new Airport(planes);
        assert.isDefined(airport.getTransportMilitaryPlanes().find(militaryPlane => 
            militaryPlane.getMilitaryType() == MilitaryType.TRANSPORT));
    });

    it('at least one military bomber plane exists', () => {
        let airport = new Airport(planes);
        assert.isDefined(airport.getBomberMilitaryPlanes().find(militaryPlane => 
            militaryPlane.getMilitaryType() == MilitaryType.BOMBER));
    });

    it('all experimental planes have classification level higher than unclassified', () => {
        let airport = new Airport(planes);
        assert.isUndefined(airport.getExperimentalPlanes().find(experimentalPlane =>
            experimentalPlane.getClassificationLevel == ClassificationLevel.UNCLASSIFIED));
    });

    it('app should return plane with max passengers capacity', () => {
        let airport = new Airport(planes);
        let planeWithMaxPassengerCapacity = new PassengerPlane({
            model: 'Boeing-747',
            maxSpeed: 980,
            maxFlightDistance: 16100, 
            maxLoadCapacity: 70500,
            passengersCapacity: 242
        });
        assert.equal(airport.getPassengerPlaneWithMaxPassengersCapacity().model, 
            planeWithMaxPassengerCapacity.model);
    });

    it('app should sort planes by max load capacity', () => {
        let airport = new Airport(planes);
        let planesSortedByMaxLoadCapacity = airport.sortPlanesByMaxLoadCapacityAsc();
        let nextPlaneMaxLoadCapacityIsHigherThanCurrent = true;
        for (let i = 0; i < planesSortedByMaxLoadCapacity.length - 1; i++) {
            let currentPlane = planesSortedByMaxLoadCapacity[i];
            let nextPlane = planesSortedByMaxLoadCapacity[i + 1];
            if (currentPlane.getMaxLoadCapacity() > nextPlane.getMaxLoadCapacity()) {
                nextPlaneMaxLoadCapacityIsHigherThanCurrent = false;
                break;
            }
        }
        assert.isTrue(nextPlaneMaxLoadCapacityIsHigherThanCurrent);
    });
});