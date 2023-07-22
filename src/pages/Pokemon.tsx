import { useLoaderData, useParams } from 'react-router-dom';
import type { Pokemon } from '@favware/graphql-pokemon';
import { GenderBar } from '../components/GenderBar';
import { Back } from '../components/Back';

export function Pokemon() {
	const { pokemon } = useLoaderData() as LoaderData;
	// console.log(pokemon);
	return (
		<div className="flex w-full flex-row items-center justify-around max-md:flex-col">
			<Back />
			<div className="flex w-2/5 items-center justify-around max-md:w-4/5">
				<GenderBar {...pokemon.gender} />
				<div className="flex flex-col items-center">
					<img
						src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${pokemon.num
							.toString()
							.padStart(3, '0')}.png`}
						alt={pokemon.species}
						className="h-[min(70vw,70vh)] object-contain"
					/>
					<h1 className="text-3xl capitalize">{pokemon.species}</h1>
				</div>
			</div>
			<div className="">some text</div>
		</div>
	);
}

interface LoaderData {
	pokemon: Pokemon;
}
