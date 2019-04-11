const body = document.querySelector("body");
const inputsContainer = document.querySelector(".inputs");
const numInput = document.querySelector(".num-input");
const option = document.querySelector(".options");
// const linearAngle = option.options[option.selectedIndex];
const randomizeBtn = document.querySelector(".randomize-btn")
const colorInputsContainer = document.querySelector(".color-inputs-container");
const p = document.querySelector(".p-tag");
const h3 = document.querySelector("h3");





const getrandomHex = () => {
	return '#' + Math.floor(Math.random() * 16777215).toString(16);
}


const makeColorInput = (num) => {
	const colorInputValues = {}

	for (let i = 1; i <= num; i++) {
		const colorInput = document.createElement("input");
		colorInput.type = "color";
		colorInput.name = `color${[i]}`;
		colorInput.value = getrandomHex();;
		colorInputsContainer.appendChild(colorInput);

		colorInputValues[colorInput.name] = colorInput.value
	}
	return colorInputValues
}


const setGradient = (angle, obj) => {
	p.classList.add("view");
	linearGradient = [`linear-gradient(${angle}`]

	for (let props in obj) {
		linearGradient.push(obj[props])
	}

	linearGradientStr = linearGradient.join().concat(")")
	body.style.background = linearGradientStr
	h3.textContent = linearGradientStr;
}



const changeGradientColor = event => {
	const element = event.target;
	for (let props in obj) {
		if (props === element.name) {
			obj[props] = element.value
			setGradient(option.options[option.selectedIndex].value, obj)
		}

	}
}


const randomize = () => {
	if (numInput.value >= 2 && numInput.value <= 100) {
		console.log("ran")
		colorInputsContainer.innerHTML = "";
		obj = makeColorInput(numInput.value);
		setGradient(option.options[option.selectedIndex].value, obj);
	}
}


h3.onclick = function () {
	document.execCommand("copy");
}


const copy = (event) => {
	event.preventDefault();
	p.classList.remove("view");
	if (event.clipboardData) {
		event.clipboardData.setData("text/plain", h3.textContent);
	}
}



inputsContainer.addEventListener("change", () => changeGradientColor(event));
randomizeBtn.addEventListener("click", randomize);
option.addEventListener("change", () => setGradient(option.options[option.selectedIndex].value, obj))
h3.addEventListener("copy", copy);


let obj = makeColorInput(numInput.value);
setGradient(option.options[option.selectedIndex].value, obj);

