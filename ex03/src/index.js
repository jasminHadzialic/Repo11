// Create a myPetsArray array here
var myPetsArray = ["Dog", "Cat"];
// End of nyPetsArray array

function myArrayFunction(myPets) {
    var myNewPets = [...myPets];
    myNewPets.push("Bird", "Fish");

    var firstPet = myNewPets.shift();
    var lastPet = myNewPets.pop();
    myNewPets.unshift("Lion");
    return myNewPets;

    // Only change code below this line

    // Onla change code above this line

}


console.log(myArrayFunction(myPetsArray));

module.exports = myArrayFunction;