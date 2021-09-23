// Only change code below this line
function mySplice(arr1, arr2, n) {
    var newArr1 = [...arr1.reverse()];
    var newArr2 = [...arr2];
    
    newArr2.splice(n, 0, ...newArr1);
    
    return newArr2;
}

// Only change code above this line
console.log(mySplice([1, 2, 3], [4, 5], 1)); // Change this line
module.exports = mySplice;