// SQUARE
const squarePerimeter = (side) => side * 4;
const squareArea = (side) => side ** 2;

// TRIANGLE
const trianglePerimeter = (side1, side2, base) => {
	return side1 + side2 + base;
};

const triangleArea = (base, height) => (base * height) / 2;

// CIRCLE
const PI = Math.PI;

const circleDiameter = (radio) => radio * 2;

const circlePerimeter = (radio) => {
	const diameter = circleDiameter(radio);
	return Number((diameter * PI).toFixed(2));
};

const circleArea = (radio) => {
	return Number((radio ** 2 * PI).toFixed(2));
};

// INTERACTION WITH HTML
const calculatePerimeter = () => {
	let input = document.getElementById('inputSquare');
	let value = input.value;

	const perimeter = squarePerimeter(value);
	let result = document.getElementById('square-result');
	let unit = document.getElementById('unit').value;
	result.innerText = `Perimeter: ${perimeter}${unit}`;
};

const calculateArea = () => {
	let input = document.getElementById('inputSquare');
	let value = input.value;

	const area = squareArea(value);
	let result = document.getElementById('square-result');
	let unit = document.getElementById('unit').value;
	result.innerText = `Area: ${area}${unit}²`;
};

let perimeterBtnBtn = document.getElementById('perimeterBtn');
perimeterBtn.addEventListener('click', calculatePerimeter);

let areaBtn = document.getElementById('areaBtn');
areaBtn.addEventListener('click', calculateArea);
