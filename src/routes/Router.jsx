import { Root } from 'postcss';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
		],
	},
]);
