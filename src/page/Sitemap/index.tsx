import './Sitemap.scss';

const DEFAULT_ROUTES = [
	{ path: '/', element: 'Home' },
	{ path: '/services', element: 'Services' },
	{ path: '/pricing', element: 'Pricing' },
	{ path: '/contact', element: 'Contact' },
	{ path: '/privacy', element: 'Privacy' },
	{ path: '/cookies', element: 'Cookies' },
	{ path: '/disclosures', element: 'Disclosures' },
	{ path: '/terms', element: 'Terms' },
	{ path: '/sitemap', element: 'Sitemap' },
	{ path: '/*', element: 'NotFound' },
];

// Utility to generate human-readable labels from paths
function labelFromPath(path: string) {
	if (path === '/') return 'Home';
	if (path === '/*') return 'Not Found';
	const name = path.replace(/^\//, '');
	return name
		.split('/')[0]
		.replace(/-/g, ' ')
		.replace(/\b\w/g, (c) => c.toUpperCase());
}

// Inline SVG icons (no external deps)
const IconHome = () => (
	<svg
		className="vs-icon"
		width="18"
		height="18"
		viewBox="0 0 24 24"
		fill="none"
		aria-hidden>
		<path
			d="M3 10.5L12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-10.5Z"
			stroke="currentColor"
			strokeWidth="1.6"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
const IconLink = () => (
	<svg
		className="vs-icon"
		width="16"
		height="16"
		viewBox="0 0 24 24"
		fill="none"
		aria-hidden>
		<path
			d="M10 14a5 5 0 0 1 0-7l1.5-1.5a5 5 0 1 1 7 7L17 14m-4 0a5 5 0 0 0 7 0L19.5 12.5m-11 0L7 14a5 5 0 0 0 7 7l1.5-1.5"
			stroke="currentColor"
			strokeWidth="1.6"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
const IconAlert = () => (
	<svg
		className="vs-icon"
		width="18"
		height="18"
		viewBox="0 0 24 24"
		fill="none"
		aria-hidden>
		<path
			d="M12 9v4m0 4h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"
			stroke="currentColor"
			strokeWidth="1.6"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export default function VisualSitemap({
	routes = DEFAULT_ROUTES,
	title = 'Visual Sitemap',
}) {
	const children = routes.filter((r) => r.path !== '/');

	return (
		<div className="visual-sitemap">
			<h1 className="visual-sitemap__title">{title}</h1>
			<p className="visual-sitemap__subtitle">
				Look for a xml sitemap at <a href="/sitemap.xml">/sitemap.xml</a> or a
				JSON version at <a href="/sitemap.json">/sitemap.json</a>.
			</p>
			<div className="visual-sitemap__root" role="group" aria-label="Root">
				<IconHome />
				<div>
					<div style={{ fontWeight: 600 }}>Home</div>
					<div className="visual-sitemap__badge">/</div>
				</div>
			</div>
			<div
				className="visual-sitemap__children"
				role="list"
				aria-label="Child routes">
				{children.map((r) => {
					const isNotFound = r.path === '/*';
					const label =
						r.element && r.element !== 'NotFound'
							? r.element
							: labelFromPath(r.path);
					return (
						<a
							key={r.path}
							className={
								'visual-sitemap__child' +
								(isNotFound ? ' visual-sitemap__notfound' : '')
							}
							href={isNotFound ? undefined : r.path}
							role="listitem"
							aria-label={label}
							onClick={(e) => {
								if (isNotFound) e.preventDefault();
							}}>
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									gap: 8,
									fontWeight: 600,
								}}>
								{isNotFound ? <IconAlert /> : <IconLink />}
								<span>{label}</span>
							</div>
							<div className="visual-sitemap__path">
								<code>{r.path}</code>
							</div>
						</a>
					);
				})}
			</div>
		</div>
	);
}
