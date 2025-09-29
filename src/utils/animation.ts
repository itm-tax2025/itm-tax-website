export const textTyping = (
	element: HTMLElement,
	text: string,
	delay: number
) => {
	let index = 0;
	const interval = setInterval(() => {
		if (index < text.length) {
			element.textContent += text.charAt(index);
			index++;
		} else {
			clearInterval(interval);
		}
	}, delay);
};
