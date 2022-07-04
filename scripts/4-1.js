function range(start, end, step = 1 ) {
    let arr = new Array();
    let len = (start > end) ? start - end : end - start

    for (let i = 0; i <= len; i++) {
        arr.push(start);
        start += step;
    }
    return arr;
}

function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55