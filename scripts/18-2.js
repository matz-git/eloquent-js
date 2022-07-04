let btn = document.getElementById("button");

btn.addEventListener("click", () => {
    let code = document.getElementById("code").value;
    let output = document.getElementById("output");

    try {
        let x = Function(code)()
        output.innerText = String(x);
    } catch (e) {
        x.innerText = "Error " + e;
    }

});