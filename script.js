const body = document.querySelector("body");
const numInput = document.querySelector(".num-input")
const option = document.querySelector(".options");
const enterBtn = document.querySelector(".enterBtn")
let linearAngle = option.options[option.selectedIndex].value;
const p = document.querySelector(".p-tag");
const css = document.querySelector("h3");
const div = document.querySelector(".color-inputs-container")


console.log(p)
const input = 2;



function getrandomHex() {
	return '#' + Math.floor(Math.random() * 16777215).toString(16);
}


function makeInput(num) {
	const inputs = [];

	for (let i = 1; i <= num; i++) {
		const input = document.createElement("input");
		input.type = "color";
		input.name = `color${[i]}`;
		input.value = getrandomHex();;
		div.appendChild(input);


		const inputArr = [];
		inputArr.push(input.name, input.value)
		inputs.push(inputArr)
	}
	return inputs
}

let inputs = makeInput(input)





function setGradient(angle, arr) {
	p.classList.add("view");
	bg = [`linear-gradient(${angle}`]

	for (let i = 0; i < arr.length; i++) {
		// bg[i + 1] = " " + arr[i][1];
		bg.push(arr[i][1]);
		console.log(arr[i][1])
	}
	bg.push(")")
	let bgStr = bg.join(",")
	let bgStr2 = bgStr.substring(0, bgStr.length - 2) + ')'
	// console.log(bgStr.substring(0, bgStr.length - 2));
	console.log(bgStr2)
	body.style.background = bgStr2
	css.textContent = bgStr2;
}

setGradient(linearAngle, inputs)




document.addEventListener("input", event => {
	var element = event.target;
	// console.log(element.name)
	// console.log(element.value)
	for (var i in inputs) {
		if (inputs[i][0] === element.name) {
			inputs[i][1] = element.value
			setGradient(linearAngle, inputs)

		}
	}
});

numInput.addEventListener("keydown", (e) => {
	if (e.keyCode === 13 && numInput.value >= 2) {
		div.innerHTML = ""
		inputs = makeInput(numInput.value)
		setGradient(option.options[option.selectedIndex].value, inputs)
		console.log(option.options[option.selectedIndex].value)

	}

})

enterBtn.addEventListener("click", (e) => {
	// e.preventDefault()
	if (numInput.value >= 2) {
		div.innerHTML = ""
		inputs = makeInput(numInput.value)
		console.log(option.options[option.selectedIndex].value)
		setGradient(option.options[option.selectedIndex].value, inputs)
	}

})



css.onclick = function () {
	document.execCommand("copy");
}

css.addEventListener("copy", function (event) {
	event.preventDefault();
	p.classList.remove("view");
	if (event.clipboardData) {
		event.clipboardData.setData("text/plain", css.textContent);
	}
	
});
