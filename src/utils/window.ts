export function getWindowDimensions(): { width: number; height: number } {
	return {
		width: window.innerWidth,
		height: window.innerHeight,
	};
}

export function isMobile(): boolean {
	return window.innerWidth <= 768; // Adjust the breakpoint as needed
}
export function isTablet(): boolean {
	return window.innerWidth > 768 && window.innerWidth <= 1024; // Adjust the breakpoint as needed
}
export function isDesktop(): boolean {
	return window.innerWidth > 1024; // Adjust the breakpoint as needed
}
export function isLandscape(): boolean {
	return window.innerWidth > window.innerHeight;
}
export function isPortrait(): boolean {
	return window.innerHeight > window.innerWidth;
}
export function isRetina(): boolean {
	return window.devicePixelRatio > 1;
}
export function isTouchDevice(): boolean {
	return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}
export function isDarkMode(): boolean {
	return (
		window.matchMedia &&
		window.matchMedia('(prefers-color-scheme: dark)').matches
	);
}
export function isHighContrastMode(): boolean {
	return (
		window.matchMedia && window.matchMedia('(prefers-contrast: more)').matches
	);
}

// --- cubic-bezier easing builder (returns easing(t) -> [0..1]) ---
function cubicBezier(x1: number, y1: number, x2: number, y2: number) {
	const cx = 3 * x1,
		bx = 3 * (x2 - x1) - cx,
		ax = 1 - cx - bx;
	const cy = 3 * y1,
		by = 3 * (y2 - y1) - cy,
		ay = 1 - cy - by;

	function sampleCurveX(t: number) {
		return ((ax * t + bx) * t + cx) * t;
	}
	function sampleCurveY(t: number) {
		return ((ay * t + by) * t + cy) * t;
	}
	function sampleCurveDerivativeX(t: number) {
		return (3 * ax * t + 2 * bx) * t + cx;
	}

	function solveTForX(x: number, eps = 1e-6): number {
		let t = x;
		for (let i = 0; i < 8; i++) {
			const xEst = sampleCurveX(t) - x;
			const d = sampleCurveDerivativeX(t);
			if (Math.abs(xEst) < eps) return t;
			if (Math.abs(d) < 1e-6) break;
			t -= xEst / d;
		}
		let t0 = 0,
			t1 = 1,
			mid = x;
		while (t0 < t1) {
			mid = (t0 + t1) / 2;
			const xMid = sampleCurveX(mid);
			if (Math.abs(xMid - x) < eps) return mid;
			if (xMid > x) t1 = mid;
			else t0 = mid;
			if (Math.abs(t1 - t0) < eps) return mid;
		}
		return mid;
	}

	return (t: number): number => {
		if (t <= 0) return 0;
		if (t >= 1) return 1;
		const solvedT = solveTForX(t);
		return sampleCurveY(solvedT);
	};
}

// --- parse 'cubic-bezier(...)' string or control-points array ---
function parseCubicBezier(
	input: string | [number, number, number, number]
): [number, number, number, number] {
	if (Array.isArray(input) && input.length === 4) return input;
	if (typeof input === 'string') {
		const m = input.match(/cubic-bezier\(([^)]+)\)/);
		if (m) {
			const parts = m[1].split(',').map((s) => parseFloat(s.trim()));
			if (parts.length === 4 && parts.every((n) => !Number.isNaN(n)))
				return parts as [number, number, number, number];
		}
	}
	return [0.25, 0.1, 0.25, 1]; // default ease
}

interface SmoothScrollOptions {
	element?: HTMLElement | Window;
}

/**
 * Smoothly scrolls to a vertical position.
 */
export function smoothScrollTo(
	targetY: number,
	duration: number = 600,
	easing:
		| string
		| [number, number, number, number] = 'cubic-bezier(.25,.1,.25,1)',
	options: SmoothScrollOptions = {}
): Promise<void> {
	const el = options.element || window;
	const isWindow = el === window;

	const startY = isWindow
		? window.scrollY || window.pageYOffset
		: (el as HTMLElement).scrollTop;
	const maxScroll = isWindow
		? Math.max(
				document.documentElement.scrollHeight,
				document.body.scrollHeight
		  ) - window.innerHeight
		: (el as HTMLElement).scrollHeight - (el as HTMLElement).clientHeight;

	const destY = Math.max(0, Math.min(targetY, maxScroll));
	const distance = destY - startY;
	if (distance === 0) return Promise.resolve();

	const [x1, y1, x2, y2] = parseCubicBezier(easing);
	const ease = cubicBezier(x1, y1, x2, y2);

	let startTime: number | null = null;

	return new Promise((resolve) => {
		function step(timestamp: number) {
			if (startTime === null) startTime = timestamp;
			const elapsed = timestamp - startTime;
			const t = Math.min(1, elapsed / duration);
			const eased = ease(t);
			const current = startY + distance * eased;

			if (isWindow) {
				window.scrollTo(0, Math.round(current));
			} else {
				(el as HTMLElement).scrollTop = Math.round(current);
			}

			if (t < 1) {
				requestAnimationFrame(step);
			} else {
				if (isWindow) window.scrollTo(0, destY);
				else (el as HTMLElement).scrollTop = destY;
				resolve();
			}
		}
		requestAnimationFrame(step);
	});
}

/**
 * Smoothly scrolls to an element in the document.
 */
export function scrollToElement(
	selector: string,
	duration: number = 700,
	easing:
		| string
		| [number, number, number, number] = 'cubic-bezier(.22,.8,.52,1)',
	offset: number = 0,
	options: SmoothScrollOptions = {}
): Promise<void> {
	const el = document.querySelector<HTMLElement>(selector);
	if (!el) return Promise.reject(new Error('Element not found: ' + selector));

	const rect = el.getBoundingClientRect();
	const docTop = window.pageYOffset || document.documentElement.scrollTop;
	const targetY = rect.top + docTop + offset;

	return smoothScrollTo(targetY, duration, easing, options);
}
