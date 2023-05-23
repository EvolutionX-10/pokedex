import { useLoaderData, useParams } from 'react-router-dom';
import type { Pokemon } from '@favware/graphql-pokemon';

export function Pokemon() {
	const { pokemon } = useLoaderData() as LoaderData;
	return <h1>{pokemon.species}</h1>;
}

interface LoaderData {
	pokemon: Pokemon;
}
