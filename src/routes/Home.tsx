import type { Pokemon } from '@favware/graphql-pokemon';
import { useEffect, useState } from 'react';
import { NavBar } from '../components/Navbar';
import { Pane2 } from '../components/Pane2';
import { getPokemonByNum } from '#lib';
export function Home() {
	const [panes, setPanes] = useState<Pokemon[]>([]);
	const [pokemon, setPokemon] = useState<Pokemon | null>(
		null
	);
	useEffect(() => {
		const random = () =>
			Math.round(Math.random() * 400) + 1;
		const fillArray = (size: number) => {
			const arr = [];
			while (arr.length < size) {
				const num = random();
				if (arr.indexOf(num) === -1) arr.push(num);
			}
			return arr;
		};

		const numbers = fillArray(12);
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
				<img
					src="assets/joy.png"
					alt="Nurse Joy"
					className="joy"
				/>
				<div className="bubble">
					Welcome to the Pokédex, here you will find
					information on different kinds of Pokémon.
				</div>
				<Pane2 pokemon={pokemon!} />
				<div className="flex flex-wrap justify-center">
					{...panes.map((p) => <Pane2 pokemon={p} />)}
				</div>
			</div>
	);
}