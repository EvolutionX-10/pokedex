import type { Pokemon } from '@favware/graphql-pokemon';
import { SearchBar } from './SearchBar';
import { useEffect, useState } from 'react';
import { NavBar } from './Navbar';
import { Pane } from './Pane';
import { getPokemonByNum } from '#lib';

export function Container() {
	const [pokemon, setPokemon] = useState<Pokemon | null>(
		null
	);
	const [panes, setPanes] = useState<Pokemon[]>([]);

	useEffect(() => {
		const random = () => Math.round(Math.random() * 200) + 1;
		const fillArray = (size: number) => {
			const arr = [];
			while (arr.length < size) {
				const num = random();
				if (arr.indexOf(num) === -1) arr.push(num);
			}
			return arr;
		};

		const numbers = fillArray(12 * 3);
		// const numbers = Array(30).fill(null).map((_, i) => i + 1);
		const set = async () => {
			setPanes(
				await Promise.all(
					numbers.map((num) => getPokemonByNum(num))
				)
			);
		};
		set();
	}, []);

	return (
		<div className="flex h-full w-full flex-col items-center">
			<NavBar pokemon={pokemon} setPokemon={setPokemon} />

			<Pane pokemon={pokemon!} />
			<div className="flex flex-wrap justify-center">
				{...panes.map((p) => <Pane pokemon={p} />)}
			</div>
		</div>
	);
}
