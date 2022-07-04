const {statSync, readdirSync, readFileSync} = require("fs");

let regExp = new RegExp(process.argv[2]);

for (let i = 0; i < process.argv.slice(3).length; i++) {
    // i+3 -> node[0] .\20-1.js[1] "(\w+)"[2] "tmp.txt"[3]
    openFile(process.argv[i+3]);
}

function openFile(file) {
    let stats = statSync(file);
    if (stats.isDirectory()) {
        for (let f of readdirSync(file)) {
            search(file + "/" + f);
        }
    } else if (regExp.test(readFileSync(file, "utf8"))) {
        console.log(file);
  }
}