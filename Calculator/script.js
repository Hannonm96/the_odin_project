let display = document.querySelector('input');
let result = "";
let keys = document.querySelectorAll('button');

keys.forEach(function (btn) {

	btn.addEventListener('click', function () {
		let lastDigit = result[result.length -1];
		if (btn.textContent === "AC") {
			clearAll();
			return;
		}
		if (btn.textContent === "C") {
			clear();
			return;
		} 

		if (btn.textContent === '=' && display.value === "") {
			return;
		}
		else if (btn.textContent === '=') {
			if (result === "") {
				return;
			} else if (lastDigit == "*" || lastDigit =="-" || 
			lastDigit == "+" || lastDigit == "/") {
				return;
			} display.value = eval(result);
			if(display.value == "Infinity") {
				display.value = "Error";
			} result = "";
			// Multiplication
		} else if (btn == keys[9]) {
			if (display.value !== "") {
				result = display.value;
			} decimalEnabled("*");
			//division
		} else if (btn == keys[5]) {
			if (display.value !== "") {
				result = display.value;
			} decimalEnabled("/");
			//subtraction
		} else if (btn == keys[13]){
			if (display.value !== "") {
				result = display.value;
			} decimalEnabled("-");
			// decimal 
		}else if (btn == keys[15]) {
			if(display.value !== "") {
				result = display.value;
			} result += ".";
		display.value = result;
		btn.disabled = true;
		// addition
		}else if (btn == keys[17]) {
			if (display.value !== "") {
				result = display.value;
			} decimalEnabled("+");
		}else {
			result += btn.textContent;
			display.value = result;
		}
	});
});

function decimalEnabled(arg) {
	result += arg;
	display.value = result;
	keys[15].disabled = false;
	return;
}

function clearAll() {
	display.value = "";
	result = "";
	keys[15].disabled = false;
	return;
}

function clear() {
	display.value = display.value.slice(0, display.value.length -1);
	result = display.value;
}

















