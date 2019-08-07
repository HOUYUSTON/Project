const root = document.getElementById("navigation").shadow
const reg = root.getElementById("register")
function clickHandler (event) {
	let newNode = document.createElement("block-map")
	newNode.src = "block-map.html"
	document.body.replaceChild(document.getElementById("media"), newNode)
}
reg.onclick = clickHandler