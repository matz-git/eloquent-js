function countBs(str) {
    let counted = 0;
    for (let i = 0; i < str.length; i++) {
        if(str[i] == "B") counted += 1;
    }
    return counted;
}

function countChar(str, ch) {
    let counted = 0;
    for (let i = 0; i < str.length; i++) {
        if(str[i] == ch) counted += 1;
    }
    return counted;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4