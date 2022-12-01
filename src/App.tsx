import gap from './assets/images/gap.svg';

const App = () => {
	return (
		<div className="flex items-center justify-center h-screen">
			<div className="grid items-end grid-flow-col gap-2 p-12 font-bold bg-white text-7xl auto-cols-max rounded-2xl">
				<span>Ä</span>
				<img src={gap} alt="gap" width="30px" height="8px" />
				<span>T</span>
				<img src={gap} alt="gap" width="30px" height="8px" />
				<span>A</span>
			</div>
		</div>
	);
};

export default App;
