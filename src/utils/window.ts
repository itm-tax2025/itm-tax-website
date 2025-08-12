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
