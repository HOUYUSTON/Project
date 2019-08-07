const root = document.getElementById("navigation").shadow
const reg = root.getElementById("register")
function clickHandler (event) {
	let new = document.createElement("block-map")
	new.src = "block-map.html"
	document.body.replaceChild(document.getElementById("media"), new)
}
reg.onclick = clickHandler