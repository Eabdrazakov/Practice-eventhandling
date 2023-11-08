window.onload = function () {
    const light = document.querySelector("button.light");
    const dark = document.querySelector("button.dark");
    const size1 = document.querySelector("button.default");
    const size2 = document.querySelector("button.incre");
    const em = document.querySelector("p > em");


    light.onclick = function () {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }

    dark.onclick = function () {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }

    size1.onclick = function () {
        document.body.style.fontSize = "";
    }

    size2.onclick = function () {
        document.body.style.fontSize = "20px";
    }

    em.onmouseover = function () {
        document.body.style.backgroundColor = "yellow";
    }

    em.onmouseout = function () {
        document.body.style.backgroundColor = "";
    }

}