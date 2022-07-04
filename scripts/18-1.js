const get_url = "https://eloquentjavascript.net/author";
const types = [
    "text/plain",
    "text/html",
    "application/json",
    "application/rainbows+unicorns"
];

async function showTypes() {
    for (let type of types) {
        let resp = await fetch(get_url, {
            headers: {
                accept: type
            }
        });
        console.log(`${type}: ${await resp.text()}\n`);
    }
}

showTypes();