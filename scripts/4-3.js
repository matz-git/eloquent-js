let ob = {};

// arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. 
function arrayToList(array) {
    let list = null;

    for (let i = array.length - 1; i >= 0; i--) {
        list = {
            value: array[i], 
            rest: list
        };
    }
    
    return list;
}

// listToArray returns an array from a list
function listToArray(list) {
    let array = [];

    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }

    return array;
}

// prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list,
function prepend(value, list) {
    return list = {value, rest: list}
}

// th, which takes a list and a number and returns the element at the given position in the list
function nth(list, num) {
    let a = 0;
    for (let node = list; node; node = node.rest) {
        if (a == num) return node.value
        else a += 1;
    }
}


console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20