import { useRef } from 'react';
export function useRipple<T extends HTMLElement>() {
	const ref = useRef<T>(null);

	const createRipple = (event: React.MouseEvent<T, MouseEvent>) => {
		const button = ref.current;
		console.log('button', button);
		if (!button) return;

		const ripple = document.createElement('span');
		ripple.className = 'ripple';

		const rect = button.getBoundingClientRect();
		const size = Math.max(rect.width, rect.height);

		ripple.style.width = ripple.style.height = `${size}px`;
		ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
		ripple.style.top = `${event.clientY - rect.top - size / 2}px`;

		button.appendChild(ripple);
		setTimeout(() => ripple.remove(), 600);
	};

	return { ref, createRipple };
}
