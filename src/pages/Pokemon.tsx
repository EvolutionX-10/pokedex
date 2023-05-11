import { Pokemon } from "@favware/graphql-pokemon"

export function Pokemon({ pokemon }: IPokemon) {
	return <div>hi {pokemon.species}</div>
}

interface IPokemon {
	pokemon: Pokemon;
}