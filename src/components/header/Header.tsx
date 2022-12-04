import { Button, Container, Grid, Text } from '@mantine/core';
import useStore from '../../store/Store';
import Settings from '../Settings/Settings';

const Header = () => {
	const useLowercase = useStore((state) => state.useLowercase);
	const setUseLowercase = useStore((state) => state.setUseLowercase);
	const setShowSettings = useStore((state) => state.setShowSettings);

	return (
		<Container fluid p={'xl'}>
			<Grid justify={'space-between'} align="center">
				<Grid.Col span={'content'}>
					<Text component="h1">Lilla läsappen</Text>
				</Grid.Col>
				<Grid.Col span={'content'}>
					<Button
						radius={'xl'}
						onClick={() => {
							setShowSettings(true);
						}}
					>
						Inställningar
					</Button>
					<Settings />
				</Grid.Col>
			</Grid>
		</Container>
	);
};

export default Header;
