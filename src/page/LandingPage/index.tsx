import React from 'react';
import Hero from './Hero';
import Differences from './Differences';
import Services from './Services';

const LandingPage: React.FC = () => {
	return (
		<div>
			<Hero />
			<Services />
			<Differences />
		</div>
	);
};

export default LandingPage;
