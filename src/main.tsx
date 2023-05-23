import ReactDOM from 'react-dom/client';
import './index.css';
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import { Pokemon } from './pages/Pokemon';
import { getPokemonByNum } from '#lib';
import App from './App';

const router = createBrowserRouter([
	{
		path: '/pokedex',
		element: <App />,
	},
	{
		path: '/pokedex/:num',
		loader: async ({ params }) => {
			const pkmn = await getPokemonByNum(
				Number(params.num)
			);
			return { pokemon: pkmn };
		},
		element: <Pokemon />,
		errorElement: <h1>404 bro what tf</h1>, // ! works nice
	},
]);

ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
).render(<RouterProvider router={router} />);
