export const applyDiscount = (startingPrice, discount) => {
	const appliedDiscount = startingPrice * (discount / 100);

	return startingPrice - appliedDiscount;
};
