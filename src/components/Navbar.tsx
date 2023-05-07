import { Pokemon } from '@favware/graphql-pokemon';
import { SearchBar } from './SearchBar';

export function NavBar(props: NavBarProps) {
	function handleClick(e: React.MouseEvent) {
		e.preventDefault();
		const svg = document
			.getElementsByTagName('svg')
			.item(0)!;

		// const wobble = new Audio('../public/assets/wobble.mp3');
		const bounce = new Audio('../public/assets/bounce.mp3');
		bounce.volume = 0.5;
		const mobile = navigator.userAgent.includes('Mobile');
		mobile && svg.classList.toggle('clicked');

		if (!mobile) {
			bounce.play();
			const val = window
				.getComputedStyle(svg)
				.transform.split('(')[1]
				.split(')')[0]
				.split(',')
				.map((a) => Number(a));
			const a = val[0];
			const b = val[1];

			const angle = Math.round(
				Math.atan2(b, a) * (180 / Math.PI)
			);

			svg.style.animationPlayState = 'paused';

			svg.animate(
				[
					{
						transform: `translateY(0%) rotate(${angle}deg)`,
					},
					{
						transform: `translateY(-100%) rotate(${angle}deg)`,
					},
					{
						transform: `translateY(0%) rotate(${angle}deg)`,
					},
				],
				{
					duration: 500,
					easing: 'cubic-bezier(1,.17,.35,-0.62)',
					direction: 'reverse',
				}
			).onfinish = () => {
				svg.style.animationPlayState = 'running';
			};
		}
	}

	return (
		<nav className="flex h-14 w-full justify-between bg-red-600 p-2">
			<div className="flex h-full w-44 justify-around">
				<svg
					viewBox="0 0 100 100"
					height={45}
					className="ballanim pokeball cursor-pointer"
					onClick={handleClick}
				>
					<g transform="translate(50 50) scale(0.8)">
						<g transform="translate(0 50)">
							<g className="gravity">
								<g transform="translate(0 -50)">
									<g
										className="ball"
										transform="scale(1 1)"
									>
										<g className="bottom">
											<path
												fill="#ffffff"
												stroke="#303030"
												strokeWidth="5"
												d="M -47.5 0 a 47.5 47.5 0 0 0 95 0z"
											></path>
										</g>
										<g className="top">
											<path
												fill="#f15d5f"
												d="M -47.5 0 a 47.5 47.5 0 0 1 95 0"
											></path>
											<path
												fill="none"
												stroke="#ffffff"
												strokeWidth="5"
												strokeLinecap="round"
												strokeDasharray="0 15 9 9 20 100"
												d="M -38 -0 a 38 38 0 0 1 76 0"
											></path>
											<path
												fill="none"
												stroke="#303030"
												strokeWidth="5"
												d="M -47.5 0 a 47.5 47.5 0 0 1 95 0z"
											></path>
										</g>
										<g
											className="open"
											transform="scale(1 0)"
										>
											<path
												fill="#303030"
												stroke="#303030"
												strokeWidth="5"
												strokeLinejoin="round"
												d="M -47.5 -10 a 190 190 0 0 1 95 0 a 190 190 0 0 1 -95 0"
											></path>
											<path
												fill="#303030"
												stroke="#303030"
												strokeWidth="5"
												strokeLinejoin="round"
												d="M -47.5 5 a 160 160 0 0 0 95 0 a 180 180 0 0 0 -95 0"
											></path>
										</g>
										<g className="center">
											<circle
												fill="#ffffff"
												stroke="#303030"
												strokeWidth="5"
												cx="0"
												cy="0"
												r="12"
											></circle>
											<circle
												fill="#ffffff"
												stroke="#303030"
												strokeWidth="3"
												cx="0"
												cy="0"
												r="6"
											></circle>
											<g className="inner" opacity="0">
												<circle
													fill="#f15d5f"
													cx="0"
													cy="0"
													r="4.5"
												></circle>
											</g>
										</g>
									</g>
								</g>
							</g>
						</g>
					</g>
				</svg>
				<img src="../public/assets/logo.png" alt="" />
			</div>
			<SearchBar
				pokemon={props.pokemon}
				setPokemon={props.setPokemon}
			/>
		</nav>
	);
}

interface NavBarProps {
	pokemon: Pokemon | null;
	setPokemon: React.Dispatch<
		React.SetStateAction<Pokemon | null>
	>;
}
