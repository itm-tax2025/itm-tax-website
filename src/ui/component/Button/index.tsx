import React from 'react';
import { useRipple } from './../../../hook/useRipple';

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
	children,
	onClick,
	...props
}) => {
	const { ref, createRipple } = useRipple<HTMLButtonElement>();

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		createRipple(e);
		if (onClick) onClick(e);
	};

	return (
		<button
			ref={ref}
			onClick={handleClick}
			className="ripple-button"
			style={{
				position: 'relative',
				overflow: 'hidden',
				padding: '12px 24px',
			}}
			{...props}>
			{children}
		</button>
	);
};

export default Button;
