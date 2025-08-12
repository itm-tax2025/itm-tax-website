import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Breadcrumbs.scss';
import Icon from '../Icon';
type BreadcrumbsProps = {
	separator?: React.ReactNode;
	labelMapping?: Record<string, string>; // optional: map slugs to human-readable labels
	className?: string;
};

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
	separator = <Icon name="caret-right" size="small" />,
	labelMapping = {},
	className = '',
}) => {
	const location = useLocation();
	const { pathname } = location;

	const segments = pathname.split('/').filter(Boolean); // removes empty parts

	const pathLinks = segments.map((segment, index) => {
		const path = '/' + segments.slice(0, index + 1).join('/');
		return {
			label: labelMapping[segment] || decodeURIComponent(segment),
			path,
		};
	});

	return (
		<nav className={`breadcrumb ${className}`} aria-label="Breadcrumb">
			<ol>
				<li>
					<Link to="/">Home</Link>
				</li>
				{pathLinks.map((item, index) => {
					const isLast = index === pathLinks.length - 1;
					return (
						<li key={item.path}>
							<span>{separator}</span>
							{isLast ? (
								<span
									aria-current="page"
									style={{ animationDelay: `${index * 500}ms` }}>
									{item.label}
								</span>
							) : (
								<Link to={item.path}>{item.label}</Link>
							)}
						</li>
					);
				})}
			</ol>
		</nav>
	);
};
