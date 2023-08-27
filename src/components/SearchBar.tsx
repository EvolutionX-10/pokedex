import { getPokemon, getPokemonByNum } from '#lib';
import type { Pokemon, PokemonEnum } from '@favware/graphql-pokemon';
import { useState, useCallback } from 'react';
import { AutoComplete } from './ui/autocomplete';
// import { ReactSearchAutocomplete } from 'react-search-autocomplete';

export function SearchBar(props: SearchBarProps) {
	const [search, setSearch] = useState('');

	const handleSearch = useCallback(
		async (e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			const pokemon = isNaN(+search)
				? await getPokemon(search.toLowerCase() as PokemonEnum)
				: await getPokemonByNum(+search);

			if (!pokemon) return;
			props.setPokemon(pokemon);
		},
		[search]
	);

	const options = [
		{
			value: 'abc',
			label: 'ABC',
		},
		{
			value: 'def',
			label: 'DEF',
		},
	];

	return (
		<AutoComplete emptyMessage="No results" options={options}
		// 		className="w-full rounded-md border-2 border-yellow-400 bg-transparent p-2.5 text-sm text-white caret-white placeholder:text-center placeholder:text-white focus:outline-none"
		/>
		// <form onSubmit={handleSearch} className="flex w-96">
		// 	<input
		// 		type="search"
		// 		value={search}
		// 		onChange={(e) => setSearch(e.target.value)}
		// 		placeholder="Search for a Pokémon..."
		// 		className="w-full rounded-md border-2 border-yellow-400 bg-transparent p-2.5 text-sm text-white caret-white placeholder:text-center placeholder:text-white focus:outline-none"
		// 	/>
		// </form>
	);
}

interface SearchBarProps {
	pokemon: Pokemon | null;
	setPokemon: React.Dispatch<React.SetStateAction<Pokemon | null>>;
}
