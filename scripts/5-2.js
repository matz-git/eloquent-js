function loop(val, testFunc, updateFunc, bodyFunc) {
    while(testFunc(val)) {
        bodyFunc(val),
        val = updateFunc(val)
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1