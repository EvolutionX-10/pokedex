import { Link, useNavigate } from 'react-router-dom';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useEffect } from 'react';

export function Back() {
	const navigate = useNavigate();

	const handleKey = (key: KeyboardEvent) => {
		if (key.key === 'b') {
			navigate('/');
		}
	};

	useEffect(() => {
		window.addEventListener('keypress', handleKey);
		return () => {
			window.removeEventListener('keypress', handleKey);
		};
	}, []);

	return (
		<Link
			to={'/'}
			className="absolute left-0 top-0 m-12 flex aspect-square w-12 cursor-pointer select-none items-center justify-center rounded-full border-4 bg-[linear-gradient(145deg,#ffffff,#e6e6e6)] text-center font-bold shadow-btn max-sm:m-6"
		>
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger>B</TooltipTrigger>
					<TooltipContent>
						<p>Back</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</Link>
	);
}
