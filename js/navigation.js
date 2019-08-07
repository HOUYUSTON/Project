const root = document.getElementById("navigation").shadow
const reg = root.getElementById("register")
function clickHandler (event) {
	let newNode = document.createElement("block-map")
	newNode.src = "block-map.html"
	let oldNode = document.getElementById("media")
	let parentNode = oldNode.parentNode
	parentNode.replaceChild(oldNode, newNode)
}
reg.onclick = clickHandler