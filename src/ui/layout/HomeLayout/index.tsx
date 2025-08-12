import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../section/Header';
import Footer from '../section/Footer';

const HomeLayout: React.FC<unknown> = () => {
	return (
		<div>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default HomeLayout;
