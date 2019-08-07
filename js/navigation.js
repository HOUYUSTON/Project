const root = document.getElementById("navigation").shadowRoot
const reg = root.getElementById("reg")
reg.style.color = "red"
reg.onclick = function (event) {
	document.getElementById("media") = document.createElement("block-map").src = "block-map.html"
}