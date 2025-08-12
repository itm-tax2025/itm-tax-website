import { useEffect, useRef, useState } from 'react';

type Options = IntersectionObserverInit & {
	once?: boolean;
};

export function useInView<T extends HTMLElement>(
	options: Options = {}
): [React.RefObject<T>, boolean] {
	const ref = useRef<T>(null as unknown as T);
	const [isInView, setIsInView] = useState(false);
	const hasIntersected = useRef(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsInView(true);
					hasIntersected.current = true;
					if (options.once) observer.unobserve(entry.target);
				} else if (!options.once && !hasIntersected.current) {
					setIsInView(false);
				}
			},
			{
				root: options.root ?? null,
				rootMargin: options.rootMargin ?? '0px',
				threshold: options.threshold ?? 0,
			}
		);

		observer.observe(el);

		return () => {
			observer.disconnect();
		};
	}, [options.root, options.rootMargin, options.threshold, options.once]);

	return [ref, isInView];
}
