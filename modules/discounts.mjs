export const applyDiscount = (originalPrice, discount) => {
	const appliedDiscount = originalPrice * (discount / 100);

	return originalPrice - appliedDiscount;
};
