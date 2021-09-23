// Create a myPetsArray array here
var myPetsArray = ["Dog", "Cat"];
// End of myPetsArray array

function myArrayFunction(myPets) {
    var myNewPets = [... myPets];

    // Only change code below this line
    myNewPets.push("Bird", "Fish");
    var firstPet = myNewPets[0];
    var lastPet = myNewPets[3];
    myNewPets[0] = "Lion";
    myNewPets.pop();

    return myNewPets;
    // Only change code above this line
}

console.log(myArrayFunction(myPetsArray));    // Change this line
module.exports = myArrayFunction;