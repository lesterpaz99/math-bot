import {
	food,
	housing,
	clothing,
	transportation,
	personalCare,
	entertaining,
} from '../modules/analysis/cost_living.mjs';

// GLOBAL VARIABLES
const main = document.getElementById('main');
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
	main.appendChild(card);
};

createCard('housing-card', 'housing', housing);
createCard('food-card', 'food', food);
createCard('clothing-card', 'clothing', clothing);
createCard('transportation-card', 'transportation', transportation);
createCard('personalCare-card', 'personalCare', personalCare);
createCard('entertaining-card', 'entertaining', entertaining);

const homePageBtn = document.getElementById('homepage-btn');
console.log(`Ciudad: ${city}`);
