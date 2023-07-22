export function GenderBar({ female, male }: GenderBarProps) {
	const style = (s: string) => ({ height: s });
	return (
		<aside className="relative mx-4 flex h-[min(70vw,70vh)] w-6 flex-col items-center justify-center rounded-lg border-2 border-gray-400 bg-gray-100 py-1 text-center">
			<img
				className="absolute translate-y-[min(39vw,37.5vh)] scale-150"
				src="assets/icons/male.svg"
				alt="male"
			/>
			<img
				className="absolute -translate-y-[min(39vw,37.5vh)] scale-150"
				src="assets/icons/female.svg"
				alt="female"
			/>
			{/* TODO: Handle a way for neutral genders */}
			<div style={style(female)} className={`w-3/5 rounded-md bg-female mb-0.5`}></div>
			<div style={style(male)} className={`w-3/5 rounded-md bg-male mt-0.5`}></div>
		</aside>
	);
}

interface GenderBarProps {
	male: string;
	female: string;
}
