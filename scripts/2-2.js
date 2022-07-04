for (let i = 1; i <= 100; i++) {
    let five;
    (i % 3 == 0) ? five = true : five = false;

    if (i % 3 == 0  && i % 5 !== 0) {
        console.log("Fizz")
    } else if (i % 5 == 0 && i % 3 !== 0) {
        console.log("Buzz")
    }
    else if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz")
    } else {
        console.log(i)
    }
}

// PRINT:
// 1-100  
// 3 - FIZZ
// 5 and NOT 3 Buzz
// 3 + 5 FizzBuzz