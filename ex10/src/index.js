// Only change code below this line 

function mySplice(arr1, arr2, n) {
    var myArr1 = [...arr1];
    var myArr2 = [...arr2];
    myArr1.reverse();
    myArr2.splice(n, 0, ...myArr1);
    return myArr2;
}

// Only change code above this line

console.log(mySplice([1, 2, 3], [4, 5], 1));  // Change this line
console.log(mySplice([1, 2, 3], [4, 5], 2));
console.log(mySplice(["b", "c"], ["a", "d"], 1));
console.log(mySplice(["Dell", "Philips"], ["Samsung", "AOX", "Sony"], 2));
module.exports = mySplice;