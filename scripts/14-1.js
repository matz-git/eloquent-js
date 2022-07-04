const MOUNTAINS = [{
        name: "Kilimanjaro",
        height: 5895,
        place: "Tanzania"
    },
    {
        name: "Everest",
        height: 8848,
        place: "Nepal"
    },
    {
        name: "Mount Fuji",
        height: 3776,
        place: "Japan"
    },
    {
        name: "Vaalserberg",
        height: 323,
        place: "Netherlands"
    },
    {
        name: "Denali",
        height: 6168,
        place: "United States"
    },
    {
        name: "Popocatepetl",
        height: 5465,
        place: "Mexico"
    },
    {
        name: "Mont Blanc",
        height: 4808,
        place: "Italy/France"
    }
];

function createTh(thEle) {
    let trNode = document.createElement("tr")
    for (var i = 0; i < thEle.length; i++) {
        let thNode = document.createElement("th")
        thNode.appendChild(document.createTextNode(thEle[i]));
        trNode.appendChild(thNode)
    }
    return trNode
}

function createTable(data) {
    let tableNode = document.createElement("table")

    let headRows = createTh(Object.keys(data[0]))
    tableNode.appendChild(headRows)

    for (let i = 0; i < data.length; i++) {
        let trNode = document.createElement("tr")

        for (var prop in data[i]) {
            let tdNode = document.createElement("td")
            tdNode.appendChild(document.createTextNode(data[i][prop]));

            if (typeof data[i][prop] == "number") {
                tdNode.style.textAlign = "right";
            }

            trNode.appendChild(tdNode)
        }

        tableNode.appendChild(trNode)
    }

    return (tableNode)
}

document.getElementById("mountains").appendChild(createTable(MOUNTAINS))
