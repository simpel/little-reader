import { useViewportSize } from '@mantine/hooks';
import Confetti from 'react-confetti';
import useStore from '../../store/Store';

const ConfettiMaker = () => {
	const { width, height } = useViewportSize();
	const numberOfConfettis = useStore((state) => state.numberOfConfettis);

	return (
		<Confetti
			width={width}
			height={height}
			numberOfPieces={numberOfConfettis}
			initialVelocityX={{ min: -40, max: 40 }}
			initialVelocityY={{ min: -40, max: 40 }}
			gravity={0.2}
			recycle={true}
			confettiSource={{ x: width - 20, y: height - 20, w: 20, h: 20 }}
		/>
	);
};

export default ConfettiMaker;
