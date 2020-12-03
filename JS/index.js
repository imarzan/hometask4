const Airport = require('./airport');
const planes = require('./planes');

(function run() {
    let airport = new Airport(planes);
    let militaryAirport = new Airport(airport.getMilitaryPlanes());
    let passengerAirport = new Airport(airport.getPassengerPlanes());
    console.log(`Military airport sorted by max flight distance: 
        ${Airport.convertToJson(militaryAirport.sortPlanesByMaxFlightDistanceAsc())}`);
    console.log(`Passenger airport sorted by max speed: 
        ${Airport.convertToJson(passengerAirport.sortPlanesByMaxSpeedAsc())}`);
    console.log(`Plane with max passenger capacity: 
        ${Airport.convertToJson(passengerAirport.getPassengerPlaneWithMaxPassengersCapacity())}`);
})();