// ARITHMETIC AVERAGE

const getAverage = (list) => {
	const total = list.reduce((a, b) => a + b);
	return total / list.length;
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

export { getAverage, getMedian };
