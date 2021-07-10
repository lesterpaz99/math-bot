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
// --------------------------

// SQUARE
const squareInput = document.getElementById('inputSquare');
const squareResult = document.getElementById('square-result');

const calculateSquarePerimeter = () => {
	const value = squareInput.value;
	const unit = document.getElementById('square-unit').value;

	const perimeter = squarePerimeter(value);
	squareResult.innerText = `Perimeter: ${perimeter}${unit}`;
};

const squarePerimeterBtn = document.getElementById('squarePerimeterBtn');
squarePerimeterBtn.addEventListener('click', calculateSquarePerimeter);

const calculateSquareArea = () => {
	const value = squareInput.value;
	const unit = document.getElementById('square-unit').value;

	const area = squareArea(value);
	squareResult.innerText = `Area: ${area}${unit}²`;
};

const squareAreaBtn = document.getElementById('squareAreaBtn');
squareAreaBtn.addEventListener('click', calculateSquareArea);

// TRIANGLE
const triangleBase = document.getElementById('base');
const triangleResult = document.getElementById('triangle-result');

const calculateTrianglePerimeter = () => {
	const sideA = document.getElementById('sideA');
	const sideB = document.getElementById('sideB');
	const valueA = sideA.value;
	const valueB = sideB.value;
	const valueBase = triangleBase.value;
	const unit = document.getElementById('triangle-unit').value;

	const perimeter = trianglePerimeter(valueA, valueB, valueBase);
	triangleResult.innerText = `Perimeter: ${perimeter}${unit}`;
};

const trianglePerimeterBtn = document.getElementById('trianglePerimeterBtn');
trianglePerimeterBtn.addEventListener('click', calculateTrianglePerimeter);

const calculateTriangleArea = () => {
	const height = document.getElementById('height');
	const valueHeight = height.value;
	const valueBase = triangleBase.value;
	const unit = document.getElementById('triangle-unit').value;

	const area = triangleArea(valueBase, valueHeight);
	triangleResult.innerText = `Area: ${area}${unit}²`;
};

const triangleAreaBtn = document.getElementById('triangleAreaBtn');
triangleAreaBtn.addEventListener('click', calculateTriangleArea);

// CIRCLE

// 1. PERIMETER
const circleRadio = document.getElementById('inputCircle');
const circleResult = document.getElementById('circle-result');

const calculateCirclePerimeter = () => {
	const radio = circleRadio.value;
	const unit = document.getElementById('circle-unit').value;

	const perimeter = circlePerimeter(radio);
	circleResult.innerText = `Perimeter: ${perimeter}${unit}`;
};

const circlePerimeterBtn = document.getElementById('circlePerimeterBtn');
circlePerimeterBtn.addEventListener('click', calculateCirclePerimeter);

// 2. AREA
const calculateCircleArea = () => {
	const radio = circleRadio.value;
	const unit = document.getElementById('circle-unit').value;

	const area = circleArea(radio);
	circleResult.innerText = `Area: ${area}${unit}²`;
};

const circleAreaBtn = document.getElementById('circleAreaBtn');
circleAreaBtn.addEventListener('click', calculateCircleArea);
