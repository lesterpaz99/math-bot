// ARITHMETIC AVERAGE

const getAverage = (list) => {
	const total = list.reduce((a, b) => a + b);
	return Number((total / list.length).toFixed(2));
};

// MEDIAN

const getMedian = (list) => {
	const sortedList = list.sort((a, b) => a - b);

	const isEven = () => sortedList.length % 2 === 0;

	if (isEven()) {
		const middleIndex = sortedList.length / 2;
		const secondMiddleIndex = middleIndex - 1;
		const values = [sortedList[middleIndex], sortedList[secondMiddleIndex]];
		return getAverage(values);
	}

	if (!isEven()) {
		const middleValue = Math.floor(sortedList.length / 2);
		return sortedList[middleValue];
	}
};

// MODE

const getMode = (list) => {
	let repeatedValues = {};
	let mode = [];

	list.map((element) => {
		if (repeatedValues[element]) {
			repeatedValues[element] += 1;
		} else {
			repeatedValues[element] = 1;
		}
	});

	const modeValues = Object.values(repeatedValues);
	repeatedValues = Object.entries(repeatedValues); // PARSE FROM OBJ TO ARRAY

	const mostPopular = Math.max(...modeValues);
	for (let i in repeatedValues) {
		if (repeatedValues[i][1] === mostPopular) {
			mode.push(repeatedValues[i][0]);
		}
	}

	return mode;
};

export { getAverage, getMedian, getMode };
