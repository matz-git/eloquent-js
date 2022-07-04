let row = []
let rowStr = "";

for (let x = 0; x < 8; x++) {
    rowStr = ""
    for (let i = 0; i < 8; i++) {
        if(x % 2 == 0) 
            (i % 2 == 0) ? rowStr += "_" : rowStr += "#";
        else 
            (i % 2 == 0) ? rowStr += "#" : rowStr += "_";
    }
    row.push(rowStr)
}

for (let i = 0; i < row.length; i++) {
    console.log(row[i]);
}
