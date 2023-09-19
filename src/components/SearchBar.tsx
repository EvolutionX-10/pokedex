import type { Pokemon } from '@favware/graphql-pokemon';
import { useState } from 'react';
import { AutoComplete, AutoCompleteOption } from '@/components/ui/autocomplete';

export function SearchBar() {
	const [search, setSearch] = useState('');
	const [options, setOptions] = useState<AutoCompleteOption[]>([]);

	return (
		<AutoComplete options={options} setOptions={setOptions} search={search} setSearch={setSearch} />
	);
}
