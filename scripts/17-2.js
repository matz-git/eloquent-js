var results = [{
        name: "Satisfied",
        count: 1043,
        color: "lightblue"
    },
    {
        name: "Neutral",
        count: 563,
        color: "lightgreen"
    },
    {
        name: "Unsatisfied",
        count: 510,
        color: "pink"
    },
    {
        name: "No comment",
        count: 175,
        color: "silver"
    }
];

let cx2 = document.querySelector("canvas").getContext("2d");
let total = results.reduce(function (sum, choice) {
    return sum + choice.count;
}, 0);

let currentAngle = -0.5 * Math.PI;
let centerX = 300,
    centerY = 150;

results.forEach(function (result) {
    let sliceAngle = (result.count / total) * 2 * Math.PI;
    cx2.beginPath();
    cx2.arc(centerX, centerY, 100,
        currentAngle, currentAngle + sliceAngle);

    let middleAngle = currentAngle + 0.5 * sliceAngle;
    let textX = Math.cos(middleAngle) * 120 + centerX;
    let textY = Math.sin(middleAngle) * 120 + centerY;
    cx2.textBaseLine = "middle";
    if (Math.cos(middleAngle) > 0) {
        cx2.textAlign = "left";
    } else {
        cx2.textAlign = "right";
    }
    cx2.font = "15px sans-serif";
    cx2.fillStyle = "black";
    cx2.fillText(result.name, textX, textY);

    currentAngle += sliceAngle;
    cx2.lineTo(centerX, centerY);
    cx2.fillStyle = result.color;
    cx2.fill();
});