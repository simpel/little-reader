import {
	Button,
	Center,
	Container,
	Grid,
	Text,
	Group,
	ThemeIcon,
} from '@mantine/core';
import { useTimeout } from '@mantine/hooks';
import { IconTrophy } from '@tabler/icons';
import useStore from '../../store/Store';

const Footer = () => {
	const setCurrentWords = useStore((state) => state.setCurrentWords);
	const setNumberOfConfettis = useStore((state) => state.setNumberOfConfettis);
	const currentScore = useStore((state) => state.currentScore);
	const highScore = useStore((state) => state.highScore);
	const increaseScore = useStore((state) => state.increaseScore);
	const { start, clear } = useTimeout(() => {
		setNumberOfConfettis(0);
		clear();
	}, 100);

	return (
		<Container fluid>
			<Grid justify={'space-between'} align="center">
				<Grid.Col span={4}>
					<Group spacing={'xs'} align="center">
						<Text style={{ lineHeight: 1 }}>Poäng</Text>
						<Text weight={'bolder'} size="lg" style={{ lineHeight: 1 }}>
							{currentScore}
						</Text>
					</Group>
				</Grid.Col>
				<Grid.Col span={4}>
					<Center>
						<Button
							radius={'xl'}
							size={'lg'}
							my={'lg'}
							color={'green'}
							onClick={() => {
								setCurrentWords();
								increaseScore();

								if (currentScore === highScore) {
									setNumberOfConfettis(100);
									start();
								}
							}}
						>
							Nästa ord
						</Button>
					</Center>
				</Grid.Col>
				<Grid.Col span={4}>
					<Group spacing={'lg'} align="center" position="right">
						<Group spacing={'sm'} align="center">
							<ThemeIcon
								color="yellow"
								radius={'xl'}
								size="xl"
								variant="gradient"
								gradient={{ from: 'yellow', to: 'orange' }}
							>
								<IconTrophy size={16} />
							</ThemeIcon>
							<Text style={{ lineHeight: 1 }}>Highscore</Text>
						</Group>
						<Text weight={'bolder'} size="lg" style={{ lineHeight: 1 }}>
							{highScore}
						</Text>
					</Group>
				</Grid.Col>
			</Grid>
		</Container>
	);
};

export default Footer;
