import './App.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeLayout from './ui/layout/HomeLayout/index';
import LandingPage from './page/LandingPage';
import TermsPage from './page/TermsPage';
import PrivacyPage from './page/PrivacyPage';
import CookiesPage from './page/CookiesPage';
import AboutPage from './page/AboutPage';
import ContactPage from './page/ContactPage';
import ServicesPage from './page/ServicesPage';
import PricingPage from './page/PricingPage';
import LearnPage from './page/LearnPage';

const router = createBrowserRouter([
	{
		element: <HomeLayout />,
		children: [
			{
				path: '/',
				element: <LandingPage />,
			},
			{
				path: '/services',
				element: <ServicesPage />,
			},
			{
				path: '/pricing',
				element: <PricingPage />,
			},
			{
				path: '/learn',
				element: <LearnPage />,
			},
			{
				path: '/about',
				element: <AboutPage />,
			},
			{
				path: '/contact',
				element: <ContactPage />,
			},

			{
				path: '/terms',
				element: <TermsPage />,
			},
			{
				path: '/privacy',
				element: <PrivacyPage />,
			},
			{
				path: '/cookies',
				element: <CookiesPage />,
			},
			{
				path: '/404',
				// element: <NotFoundPage />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
