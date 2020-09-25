document.querySelectorAll(".number").addEventListener("click", bottomScreen)

function bottomScreen() {
    document.querySelector(".bottom_screen").innerText = document.querySelectorAll(".number").value
}

