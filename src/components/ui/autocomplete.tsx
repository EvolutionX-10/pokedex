import { getFuzzyPokemon } from '@/lib/getFuzzyPokemon';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function AutoComplete(props: AutoCompleteProps) {
	const { search, setSearch } = props;
	const [sorted, setSorted] = useState<AutoCompleteOption[]>([]);
	const redirect = useNavigate();

	const inputRef = useRef<HTMLInputElement>(null);
	useEffect(() => {
		const runInput = async () => {
			const term = inputRef.current?.value ?? '';
			const options = await getFuzzyPokemon(term, 5);

			const map = options.map((p) => ({
				value: p.num,
				label: p.species,
				forme: p.forme,
			}));
			const final = map.sort((a, b) => a.value - b.value);
			// remove duplicates
			const unique = final.filter((v, i, a) => a.findIndex((t) => t.value === v.value) === i);
			setSorted(term === unique[0]?.label ? [] : unique);

			if (term.length && !map.length) {
				setSorted([{ value: 0, label: 'No results found' }]);
				return;
			}
		};
		runInput();
	}, [search]);

	useEffect(() => {
		if (!inputRef.current?.contains(document.activeElement)) {
			setSorted([]);
		} else {
			setSorted(props.options);
		}
	}, [document.activeElement]);


	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Enter') {
				const firstOption = sorted[0];
				console.log(firstOption)
				if (firstOption) {
					setSearch('');
					redirect(`/${firstOption.value}`);
				}
			}
		}
		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [])

	return (
		<div className="relative">
			<input
				type="search"
				className="w-full rounded bg-gray-200 px-4 py-2 text-gray-700"
				placeholder="Search"
				onChange={(e) => setSearch(e.target.value)}
				value={search}
				ref={inputRef}
			/>
			<ul className="absolute z-10 w-full overflow-hidden rounded-md bg-white shadow-lg">
				{sorted.slice(0, 5).map((option) => (
					<AutoCompleteOption
						{...option}
						key={option.label}
						inputRef={inputRef}
						setSearchTerm={setSearch}
						setSortedOptions={setSorted}
					/>
				))}
			</ul>
		</div>
	);
}

function AutoCompleteOption(props: AutoCompleteOptionProps) {
	const redirect = useNavigate();
	const handleClick = () => {
		if (props.value !== 0) {
			props.setSearchTerm('');
			redirect(`/${props.value}`);
		}
	};
	const disabled = props.value === 0 ? `opacity-50 cursor-not-allowed` : ``;
	return (
		<li
			className={'cursor-pointer px-4 py-2 capitalize hover:bg-gray-200' + disabled}
			onClick={() => handleClick()}
		>
			{props.label}
		</li>
	);
}

interface AutoCompleteProps {
	options: AutoCompleteOption[];
	search: string;
	setOptions: React.Dispatch<React.SetStateAction<AutoCompleteOption[]>>;
	setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export interface AutoCompleteOption {
	value: number;
	label: string;
}

interface AutoCompleteOptionProps extends AutoCompleteOption {
	inputRef: React.Ref<HTMLInputElement>;
	setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
	setSortedOptions: React.Dispatch<React.SetStateAction<AutoCompleteOption[]>>;
}
