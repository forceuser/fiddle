function toDom (html) {
	const d = document.createElement("div");
	d.innerHTML = html.trim();
 	return [...d.childNodes];
}

const container = toDom(`<div><img src=""></div>`)[0];
document.body.appendChild(container);
