const food = [];
const housing = [];
const clothing = [];
const transportation = [];
const personalCare = [];
const entertaining = [];

food.push({ name: 'Expensive Daily Menu (includes drink)', price: 11 });
food.push({ name: 'Fast food menu', price: 7 });
food.push({ name: '1 pound chicken breast', price: 2.16 });
food.push({ name: '1 liter whole milk', price: 2.08 });
food.push({ name: 'Dozen eggs', price: 1.92 });
food.push({ name: '1kg. tomatoes', price: 1.16 });
food.push({ name: '500gr. cheese', price: 2.7 });
food.push({ name: '1kg. apples', price: 2.2 });
food.push({ name: '1kg. potatoes', price: 1.3 });
food.push({ name: '16ounces. national beer from supermarket', price: 1.16 });
food.push({ name: '1 bottle of good quality red table wine', price: 12 });
food.push({ name: '2 liters. Soda (Coca Cola)', price: 1.68 });
food.push({ name: 'Bread for two people', price: 1.15 });

housing.push({
	name: 'Rental of an 85m2. furnished apartment in the expensive part of the city',
	price: 572,
});
housing.push({
	name: 'Rental of an 85m2. furnished apartment in the normal area of the city',
	price: 304,
});
housing.push({
	name: 'Electricity and water expenses for 2 people',
	price: 77,
});
housing.push({
	name: 'Electricity and water expenses for 1 person',
	price: 47,
});
housing.push({
	name: 'Rental of a 45m2. furnished studio in the expensive area of the city',
	price: 504,
});
housing.push({
	name: 'Rental of a 45m2. furnished studio in the normal area of the city',
	price: 283,
});
housing.push({ name: 'Internet 10mbps (1 month)', price: 28 });
housing.push({ name: 'TV 40 inches', price: 390 });
housing.push({
	name: '800/900 watt microwave (bosch, panasonic, lg, sharp, or equivalent)',
	price: 101,
});
housing.push({ name: '100ounces. Liquid detergent', price: 7 });
housing.push({ name: '1 hour. Domestic cleaning service', price: 15 });

clothing.push({ name: '1 pair. Jeans', price: 57 });
clothing.push({
	name: "1 women's summer dress in a fashion store (zara, h&m or similar stores)",
	price: 28,
});
clothing.push({
	name: '1 pair of sneakers (nike, adidas, or similar brand)',
	price: 104,
});
clothing.push({ name: "1 pair of men's leather shoes", price: 66 });

transportation.push({
	name: 'Volkswagen golf 1.4 tsi 150 hp (or similar), new, without extras',
	price: 17980,
});
transportation.push({ name: '1 liter (1/4 gallon) of gasoline', price: 1.08 });
transportation.push({
	name: 'Public transportation expenses (monthly)',
	price: 30,
});
transportation.push({ name: 'Uber', price: 3.5 });

personalCare.push({
	name: '6-day cold medicine (tylenol, frenadol, coldrex, or equivalent)',
	price: 5.26,
});
personalCare.push({ name: '1 box of antibiotics of 12 doses', price: 9 });
personalCare.push({ name: 'Private doctor visit (15 min)', price: 41 });
personalCare.push({
	name: '1 box of 32 tampons (tampax, ob, or similar brand)',
	price: 4.8,
});
personalCare.push({
	name: 'Desodorante roll-on (50ml ~ 1.5 oz.)',
	price: 3.23,
});
personalCare.push({ name: 'A bottle of shampoo (400 ml)', price: 5.79 });
personalCare.push({ name: 'Toilet paper (4 rolls)', price: 2.83 });
personalCare.push({ name: 'Toothpaste (6.5oz - 184g)', price: 1.76 });
personalCare.push({
	name: 'Haircut in a barbershop in the normal area of the city',
	price: 4,
});
personalCare.push({
	name: 'Haircut in a barbershop in the expensive area of the city',
	price: 7,
});

entertaining.push({
	name: 'Normal dinner for two in a neighborhood restaurant',
	price: 11,
});
entertaining.push({ name: '2 movie tickets, regular session', price: 8 });
entertaining.push({
	name: '2 theater tickets (best available seats)',
	price: 21,
});
entertaining.push({
	name: 'Dinner for two at an Italian restaurant in the expensive area, including starters, main course, wine and dessert',
	price: 34,
});
entertaining.push({
	name: '1 cocktail, drink at an expensive club or disco in the city',
	price: 3.95,
});
entertaining.push({
	name: 'Cappuccino in the expensive area of the city',
	price: 2.43,
});
entertaining.push({
	name: '1 half-liter beer in a neighborhood bar',
	price: 1.19,
});
entertaining.push({
	name: '1 min. calls with prepaid rate (no discounts or monthly plans)',
	price: 0.3,
});
entertaining.push({
	name: '1 pack of Marlboro cigarettes',
	price: 2.86,
});
entertaining.push({
	name: 'Monthly membership to a gym in the expensive area',
	price: 52,
});

export { food, housing, clothing, transportation, personalCare, entertaining };
