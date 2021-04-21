var myCars = {
    'id': 1,
    'name': "Audi"
}
console.log("Id :" + myCars.id + "\nName : " + myCars.name);

var Vehicle = {
    'id': 1,
    'car': {
        'name': 'Ferrari',
        'location': 'Italya'
    },
    'found': 1929,

    showDisplay: function() {
        setTimeout(function() {
            console.log("Hãng xe lớn");
        }, 5000);

    }
}

console.log(Vehicle.id);
console.log(Vehicle.car.name);
console.log(Vehicle.car.location);
console.log(Vehicle.found);
console.log(Vehicle.showDisplay());
console.log(Vehicle.showDisplay);