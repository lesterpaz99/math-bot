/*
  SHAPES
*/
import {
	calculateSquarePerimeter,
	calculateSquareArea,
	calculateTrianglePerimeter,
	calculateTriangleArea,
	calculateCirclePerimeter,
	calculateCircleArea,
} from './modules/shapes.mjs';

/*
  DISCOUNT
*/
import { applyDiscount } from './modules/discounts.mjs';

// INTERACTION WITH HTML FOR SHAPES

//SQUARE
const squarePerimeterBtn = document.getElementById('squarePerimeterBtn');
squarePerimeterBtn.addEventListener('click', calculateSquarePerimeter);

const squareAreaBtn = document.getElementById('squareAreaBtn');
squareAreaBtn.addEventListener('click', calculateSquareArea);

// TRIANGLE
const trianglePerimeterBtn = document.getElementById('trianglePerimeterBtn');
trianglePerimeterBtn.addEventListener('click', calculateTrianglePerimeter);

const triangleAreaBtn = document.getElementById('triangleAreaBtn');
triangleAreaBtn.addEventListener('click', calculateTriangleArea);

// CIRCLE
const circlePerimeterBtn = document.getElementById('circlePerimeterBtn');
circlePerimeterBtn.addEventListener('click', calculateCirclePerimeter);

const circleAreaBtn = document.getElementById('circleAreaBtn');
circleAreaBtn.addEventListener('click', calculateCircleArea);

// INTERACTION WITH HTML FOR DISCOUNT
const startingPrice = document.getElementById('startingPrice');
const discount = document.getElementById('discount');

const getFinalPrice = () => {
	const priceResult = document.getElementById('priceResult');
	const startingPriceValue = startingPrice.value;
	const discountValue = discount.value;

	let finalPrice = applyDiscount(startingPriceValue, discountValue);
	priceResult.innerHTML = finalPrice;
};

startingPrice.addEventListener('keyup', getFinalPrice);
discount.addEventListener('keyup', getFinalPrice);
