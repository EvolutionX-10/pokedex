import { getAllPokemon, getPokemon, getPokemonByNum } from '#lib';
import type { Pokemon, PokemonEnum } from '@favware/graphql-pokemon';
import { useState, useCallback, useEffect } from 'react';
import { AutoComplete, AutoCompleteOption } from '@/components/ui/autocomplete';

export function SearchBar(props: SearchBarProps) {
	const [search, setSearch] = useState('');
	const [options, setOptions] = useState<AutoCompleteOption[]>([]);

	return <AutoComplete options={options} setOptions={setOptions} search={search} setSearch={setSearch} />;
}

interface SearchBarProps {
	pokemon: Pokemon | null;
	setPokemon: React.Dispatch<React.SetStateAction<Pokemon | null>>;
}
