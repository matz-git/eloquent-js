let ballon = document.getElementById("balloon");
let size;
function setSize(newSize) {
    size = newSize;
    ballon.style.fontSize = size + "px";
}
setSize(20);

function handleArrow(event) {
    if (event.key == "ArrowUp") {             
        if (size > 100) {
            ballon.textContent = "💥";
            document.body.removeEventListener("keydown", handleArrow);
        } else {
            setSize(size * 1.1)
            // to prevent Default action like scrolling
            event.preventDefault();
        }
    } else if (event.key == "ArrowDown") {
        setSize(size * 0.9)
        event.preventDefault();
    }
}

document.body.addEventListener("keydown", handleArrow);