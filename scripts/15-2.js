let divs = [];
let x = 0;
let xMax = 22;

for (let i = 0; i < xMax; i++) {
    let div = document.createElement('div');
    div.classList.add('trail');
    document.body.appendChild(div);
    divs.push(div);
}

let te = document.getElementsByClassName("content-right")[0]
te.addEventListener("mousemove", event => {
    divs[x].style.top = (event.pageY - 3) + 'px';
    divs[x].style.left = (event.pageX - 3) + 'px';

    x += 1
    if (x == xMax) x = 0
});