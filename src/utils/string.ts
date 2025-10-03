export function formatCurrency(
	value: number,
	locale: string = 'en-US',
	currency: string = 'USD'
): string {
	return new Intl.NumberFormat(locale, {
		style: 'currency',
		currency,
	}).format(value);
}

export function capitalizeFirstLetter(str: string): string {
	if (!str) return str;
	return str.charAt(0).toUpperCase() + str.slice(1);
}

export function truncateString(str: string, num: number): string {
	if (str.length <= num) {
		return str;
	}
	return str.slice(0, num) + '...';
}
