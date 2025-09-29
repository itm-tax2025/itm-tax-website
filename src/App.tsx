import './App.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeLayout from './ui/layout/HomeLayout';
import Home from './page/Home';
import NotFound from './page/NotFound';

const router = createBrowserRouter([
	{
		element: <HomeLayout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '*',
				element: <NotFound />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
