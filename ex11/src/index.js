// Only change code below this line
function splitArrayInGroups(arr, n){
    var myArray = [...arr];
    var result = [];   
    while (myArray.length > 0) { 
            var chunk = [];
            chunk = myArray.splice(0,n);
            result.push(chunk); 
       }
    while (result.length > 2 && n == 2) {
        result.pop()
    }
    return result;
}
// Only change code above this line

console.log(splitArrayInGroups(["a", "b", "c", "d"], 2));  // Change this line
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5], 2));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
module.exports = splitArrayInGroups;