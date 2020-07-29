document.getElementById("btn").addEventListener("click", countdown)
const zeit = document.querySelector(".zeit")
let count = 100

function countdown() {
    let down = setInterval(() => {
        count--
        zeit.innerHTML = `${count}%`
        if (count == 0) {
            clearInterval(down)
        }
    }, 100);
}