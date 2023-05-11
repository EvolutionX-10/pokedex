import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import App from './App';
import './index.css';
import { NotFound404 } from './routes/404';

const router = createBrowserRouter([
	{
		path: '/pokedex/',
		element: <App />,
		errorElement: <NotFound404 />,
	},
]);

ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
).render(<RouterProvider router={router} />);
