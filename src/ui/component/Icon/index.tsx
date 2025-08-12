import React from 'react';
import './Icon.scss';
interface IconProps {
	size?: string;
	name?: string;
	onClick?: React.MouseEventHandler<HTMLElement>;
	innerRef?: React.Ref<HTMLElement>;
	title?: string;
	id?: string;
	ariaDetails?: string;
}

const Icon: React.FC<IconProps> = ({
	size,
	name,
	onClick,
	innerRef,
	title,
	id,
	ariaDetails,
}) => {
	const handleClick = (e: React.MouseEvent<HTMLElement>) => {
		if (onClick) onClick(e);
	};
	const classes = `icon ${size ? 'icon--' + size : ''} ${
		name ? 'icon--' + name : ''
	} transition--fast`;
	return (
		<i
			id={id}
			className={classes}
			onClick={handleClick}
			ref={innerRef}
			title={title}
			aria-details={ariaDetails}
		/>
	);
};

export default Icon;
