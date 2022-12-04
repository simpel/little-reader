import { Center, Container, Group, Loader } from '@mantine/core';
import { useEffect } from 'react';

import { useWord } from '../../hooks/useWord';
import useStore from '../../store/Store';
import ConfettiMaker from '../confettiMaker/ConfettiMaker';
import Word from '../word/Word';

const Sentence = () => {
	const { data, isLoading } = useWord();

	const currentWords = useStore((state) => state.currentWords);
	const setAllWords = useStore((state) => state.setAllWords);

	useEffect(() => {
		if (data?.data) {
			setAllWords(data.data);
		}
	}, [data]);

	const renderWords = () => {
		return currentWords.map((word, index) => {
			return <Word word={word} key={`${word}_${index}`} />;
		});
	};

	if (isLoading && currentWords.length === 0) {
		return <Loader />;
	}

	return (
		<>
			<ConfettiMaker />

			<Container>
				<Center>
					<Group spacing={100} position="center">
						{renderWords()}
					</Group>
				</Center>
			</Container>
		</>
	);
};

export default Sentence;
