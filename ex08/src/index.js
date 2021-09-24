// Only change code below this line

function myMutation(arr){
    var value1 = arr[0].toLowerCase();
    var value2 = arr[1].toLowerCase();
    result = [];

    for (var i = 0; i <value2.length; i++) {
        result.push(value1.indexOf(value2[i]));
    }
    if (result.includes(-1)) {
        return false;
    }
    return true;

}
// Only change code above this line

console.log(myMutation(["hello", "hey"])); 
console.log(myMutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(myMutation(["Mary", "Army"]));
console.log(myMutation(["Mary", "Aarmy"]));
console.log(myMutation(["Alien", "line"]));
console.log(myMutation(["floor", "for"]));
console.log(myMutation(["hello", "neo"]));
console.log(myMutation(["voodoo", "no"]));
console.log(myMutation(["ate", "date"]));
console.log(myMutation(["Tiger", "Zebra"]));
console.log(myMutation(["Noel", "Ole"]));
module.exports = myMutation;






