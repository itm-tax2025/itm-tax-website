import './App.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeLayout from './ui/layout/HomeLayout';
import Home from './page/Home';
import NotFound from './page/NotFound';
import Services from './page/Services';
import Pricing from './page/Pricing';
import Contact from './page/Contact';
import Privacy from './page/Privacy';
import Cookies from './page/Cookies';
import Disclosures from './page/Disclosures';
import Terms from './page/Terms';
import Sitemap from './page/Sitemap';
const router = createBrowserRouter(
	[
		{
			element: <HomeLayout />,
			children: [
				{
					path: '/',
					element: <Home />,
				},
				{
					path: '/services',
					element: <Services />,
				},
				{
					path: '/pricing',
					element: <Pricing />,
				},
				{
					path: '/contact',
					element: <Contact />,
				},
				{
					path: '/privacy',
					element: <Privacy />,
				},
				{
					path: '/cookies',
					element: <Cookies />,
				},
				{
					path: '/disclosures',
					element: <Disclosures />,
				},
				{
					path: '/terms',
					element: <Terms />,
				},
				{
					path: '/sitemap',
					element: <Sitemap />,
				},
				{
					path: '/*',
					element: <NotFound />,
				},
			],
		},
	],
	{
		basename: import.meta.env.BASE_URL,
	}
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
