import { Group, Text } from '@mantine/core';
import gap from '../../assets/images/gap.svg';
import useStore from '../../store/Store';
import type { TWord } from './TWord';

const Word = ({ word }: TWord) => {
	const useLowercase = useStore((state) => state.useLowercase);

	const renderWord = (wordArray: string[]) => {
		return wordArray.map((letter, index) => {
			return (
				<Group spacing={0} align={'end'} key={`${letter}_${index}`}>
					<Text size={'xl'}>
						{useLowercase ? letter.toLowerCase() : letter.toUpperCase()}
					</Text>
					{index !== wordArray.length - 1 && (
						<img
							src={gap}
							alt="gap"
							width="30px"
							height="8px"
							key={`gap_${letter}_${index}`}
						/>
					)}
				</Group>
			);
		});
	};

	return <Group spacing={0}>{renderWord(word.split(''))}</Group>;
};

export default Word;
