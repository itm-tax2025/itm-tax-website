import React from 'react';
import './Card.scss';
interface CardProps {
	id?: string;
	children: React.ReactNode;
	className?: string;
	style?: React.CSSProperties | undefined;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
	onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
	onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
}

const Card: React.FC<CardProps> = ({
	id,
	children,
	className,
	style,
	onClick,
	onMouseEnter,
	onMouseLeave,
}) => {
	return (
		<div
			className={`card ${className}`}
			style={style}
			onClick={onClick}
			id={id}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}>
			{children}
		</div>
	);
};

export default Card;
