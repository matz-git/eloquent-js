// takes an array as argument and produces a new array that has the same elements in the inverse order. 
function reverseArray(arr) {
    let newArr = new Array();
    for (let i = arr.length-1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

// modifies the array given as argument by reversing its elements.
function reverseArrayInPlace(arr) {
    let tmp = "";
    let z = arr.length-1;
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        tmp = arr[i]
        arr[i] = arr[z];
        arr[z] = tmp;
        z -= 1;
    }
    return arr;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]