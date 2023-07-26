import type { Stats } from '@favware/graphql-pokemon';
import { Bar } from './Bar';

export function StatsBlock({ stats }: StatsBlockProps) {
	console.log(stats);

	const color: Record<string, string> = {
		attack: '#f5ac78',
		defense: '#fae078',
		specialattack: '#9db7f5',
		specialdefense: '#a7db8d',
		speed: '#fa92b2',
		hp: '#c6c6e7',
	};

	return (
		<div className="min-w-[min(16rem,80vw)] max-w-[min(20rem,90vw)] flex flex-col items-center justify-around rounded-md border-2 border-blue-400 px-4">
			<h2 className="pb-2 text-3xl font-medium">Base Stats</h2>
			{Object.entries(stats).map(([key, value]) => {
				return <Bar key={key} color={color[key]} stat={value} name={key} />;
			})}
		</div>
	);
}

interface StatsBlockProps {
	stats: Stats;
}
