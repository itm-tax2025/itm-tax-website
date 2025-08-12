import React from 'react';
import './Header.scss';
import Navbar from '../../../component/Navbar';
const Header: React.FC = () => {
	return (
		<header className='header'>
			<Navbar />
		</header>
	);
};

export default Header;
