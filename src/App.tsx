import './App.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeLayout from './ui/layout/HomeLayout';
import Home from './page/Home';
import NotFound from './page/NotFound';
import Services from './page/Services';
import Pricing from './page/Pricing';
import Contact from './page/Contact';
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
					path: '*',
					element: <NotFound />,
				},
			],
		},
	],
	{
		basename: '/itmtax',
	}
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
