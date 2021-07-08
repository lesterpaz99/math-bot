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
