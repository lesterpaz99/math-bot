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
} from './modules/geometry.mjs';

/*
  DISCOUNT
*/
import { applyDiscount } from './modules/discounts.mjs';
import { getAverage, getMedian, getMode } from './modules/statistics.mjs';

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
startingPrice.addEventListener('change', getFinalPrice);
discount.addEventListener('keyup', getFinalPrice);
discount.addEventListener('change', getFinalPrice);

// STATISTICS
const meanBtn = document.getElementById('mean-btn');
const medianBtn = document.getElementById('median-btn');
const modeBtn = document.getElementById('mode-btn');

const stopDefaultAction = (ev) => ev.preventDefault();

const callToAction = (ev, tool) => {
	stopDefaultAction(ev);
	let data = document.getElementById('statistics-data').value.trim();
	const answer = document.getElementById('statistics-result');

	if (data === '') {
		answer.innerText = 'Enter a valid data';
		return answer;
	}

	data = data.split('-');
	data = data.map((element) => Number(element));

	const resultP = document.getElementById('result-chosen');
	resultP.innerText = tool;

	let result = 0;
	const isMean = () => tool.toLowerCase() === 'mean';
	const isMedian = () => tool.toLowerCase() === 'median';
	const isMode = () => tool.toLowerCase() === 'mode';

	if (isMean()) result = getAverage(data);
	if (isMedian()) result = getMedian(data);
	if (isMode()) {
		result = getMode(data);
		answer.innerText = result;
		return answer;
	}
	answer.innerText = isNaN(result) ? 'Enter a valid data' : result;
};

meanBtn.addEventListener('click', (e) => callToAction(e, 'Mean'));
medianBtn.addEventListener('click', (e) => callToAction(e, 'Median'));
modeBtn.addEventListener('click', (e) => callToAction(e, 'Mode'));

// SAVE THE CITY IN THE LOCAL STORAGE
const costLivingBtn = document.getElementById('cost-living__btn');

costLivingBtn.addEventListener('click', () => {
	const city = document.getElementById('city').value;
	const incomes = document.getElementById('income').value;

	const isFull = (input) => input === null || input === '';

	if (isFull(city) && isFull(incomes)) {
		localStorage.setItem('city', city);
		localStorage.setItem('incomes', incomes);
	} else {
		localStorage.clear();
		localStorage.setItem('city', city);
		localStorage.setItem('incomes', incomes);
	}
});
