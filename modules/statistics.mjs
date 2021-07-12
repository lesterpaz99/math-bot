// ARITHMETIC AVERAGE

const getAverage = (salaries) => {
	const total = salaries.reduce((a, b) => a + b);
	return total / salaries.length;
};

//

export { getAverage };
