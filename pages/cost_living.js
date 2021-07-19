import {
	food,
	housing,
	clothing,
	transportation,
	personalCare,
	entertaining,
} from '../modules/analysis/cost_living.mjs';

import { getAverage, getMedian, getMode } from '../modules/statistics.mjs';

// GLOBAL VARIABLES
const information = document.getElementById('information');
const city = localStorage.getItem('city');

// GET THE MAIN TITLE OF THE PAGE
const titleCity = document.getElementById('title-city');
titleCity.innerText = city;

// GET THE USER INCOME FROM THE MAIN PAGE
const userIncomes = document.getElementById('current-income');
userIncomes.innerText = localStorage.getItem('incomes');

// CREATE THE CARD

const createCard = (idCard, cardTitleText, services) => {
	const card = document.createElement('div');
	card.setAttribute('id', idCard);
	card.setAttribute('class', `card ${idCard}`);

	const titleContainer = document.createElement('div');
	titleContainer.setAttribute('class', 'title__container');
	card.appendChild(titleContainer);

	const cardTitle = document.createElement('h3');
	cardTitle.setAttribute('class', 'card-title');
	cardTitle.innerText = cardTitleText;
	titleContainer.appendChild(cardTitle);

	const cardPrice = document.createElement('span');
	cardPrice.setAttribute('class', 'title-price');
	cardPrice.innerText = 'price';
	titleContainer.appendChild(cardPrice);
	// CREATE THE DATA TABLE INSIDE THE CARD
	for (let element in services) {
		const { name, price } = services[element];
		const dataTable = document.createElement('div');
		dataTable.setAttribute('class', 'data__table');
		card.appendChild(dataTable);

		const serviceOrProductName = document.createElement('p');
		serviceOrProductName.setAttribute('class', 'service-name');
		serviceOrProductName.innerText = name;

		const serviceOrProductPrice = document.createElement('p');
		serviceOrProductPrice.setAttribute('class', 'service-price');
		serviceOrProductPrice.innerText = `$ ${price}`;

		dataTable.appendChild(serviceOrProductName);
		dataTable.appendChild(serviceOrProductPrice);
	}
	information.appendChild(card);
};

createCard('housing-card', 'housing', housing);
createCard('food-card', 'food', food);
createCard('clothing-card', 'clothing', clothing);
createCard('transportation-card', 'transportation', transportation);
createCard('personalCare-card', 'personalCare', personalCare);
createCard('entertaining-card', 'entertaining', entertaining);

const homePageBtn = document.getElementById('homepage-btn');
console.log(`Ciudad: ${city}`);

const getAverageExpenses = (service) => {
	const prices = service.map((item) => {
		return item.price;
	});

	if (service === transportation) {
		return getMedian(prices);
	}
	return getAverage(prices);
};

const totalExpenses = (service) => {
	const prices = service.map((item) => {
		return item.price;
	});

	return prices.reduce((a, b) => a + b);
};

const totals = [];
totals.push(totalExpenses(food));
totals.push(getAverageExpenses(housing));
totals.push(totalExpenses(clothing));
totals.push(getAverageExpenses(transportation));
totals.push(totalExpenses(personalCare));
totals.push(totalExpenses(entertaining));

const costOfLiving = totals.reduce((a, b) => a + b);
console.log(costOfLiving);

const costOfLivingText = document.getElementById('cost-of-living');
costOfLivingText.innerText = costOfLiving;

const totalUserIncomes = Number(userIncomes.innerText);
const incomesLeft = Number((totalUserIncomes - costOfLiving).toFixed(2));
console.log(incomesLeft);

const savingCapacity1 = (incomesLeft * 0.3).toFixed(2);
const savingCapacity2 = (incomesLeft * 0.4).toFixed(2);

const savingCapacityText = document.getElementById('savings-capacity');
savingCapacityText.innerText = `Your savings capacity is between $${savingCapacity1} and $${savingCapacity2} approximately.`;
