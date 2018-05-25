function toDom (html) {
	const d = document.createElement("div");
	d.innerHTML = html.trim();
 	return [...d.childNodes];
}

const container = toDom(`<div><img src="./red-panda-1182078_960_720.jpg"></div>`)[0];
document.body.appendChild(container);
