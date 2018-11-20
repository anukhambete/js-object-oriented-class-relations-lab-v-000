let store = {drivers:[], passengers:[], trips:[]};
let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
  constructor(name) {
    this.id = ++driverId;
    this.name = name;
    store.drivers.push(this);
  }

  trips(){
    return store.trips.filter(
      function(trip) {
        return trip.driverId === this.id;
      }.bind(this)
    );
  }

  passengers(){
    let array = this.trips();
    let passenger_ids = array.map(x => x.passengerId);
    let new_array = [];
    let i;
        for(i=0;i<passenger_ids.length;i++) {
          let x = store.passengers.find(a => a.id === passenger_ids[i]);
          new_array.push(x);
        }
    return new_array;
  }



}

class Passenger {
  constructor(name) {
    this.id = ++passengerId;
    this.name = name;
    store.passengers.push(this);
  }

  trips(){
    return store.trips.filter(
      function(trip) {
        return trip.passengerId === this.id;
      }.bind(this)
    );
  }

  drivers(){
    let array = this.trips();
    let driver_ids = array.map(x => x.driverId);
    let new_array = [];
    let i;
        for(i=0;i<driver_ids.length;i++) {
          let x = store.drivers.find(a => a.id === driver_ids[i]);
          new_array.push(x);
        }
    return new_array;
  }
}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    store.trips.push(this);
  }

  driver(){
    return store.drivers.find(
      function(driver) {
        return driver.id === this.driverId;
      }.bind(this)
    );
  }

  passenger(){
    return store.passengers.find(
      function(passenger) {
        return passenger.id === this.passengerId;
      }.bind(this)
    );
  }
}
