import type { NumberInputProps } from '@mantine/core';
import {
	Button,
	SegmentedControl,
	Container,
	Grid,
	Group,
	Text,
} from '@mantine/core';
import { IconChevronDown, IconChevronUp } from '@tabler/icons';
import useStore from '../../store/Store';

const Header = () => {
	const setMaxLetters = useStore((state) => state.setMaxLetters);
	const setMaxWords = useStore((state) => state.setMaxWords);
	const maxLetters = useStore((state) => state.maxLetters);
	const maxWords = useStore((state) => state.maxWords);
	const useLowercase = useStore((state) => state.useLowercase);
	const setUseLowercase = useStore((state) => state.setUseLowercase);

	const inputStyle: NumberInputProps['styles'] = {
		wrapper: {
			width: '70px',
		},
		input: {
			textAlign: 'center',
		},
	};

	return (
		<Container fluid p={'xl'}>
			<Grid justify={'space-between'} align="center">
				<Grid.Col span={'content'}>
					<Text component="h1">Lilla läsappen</Text>
				</Grid.Col>
				<Grid.Col span={'content'}>
					<Grid gutter={'xl'}>
						<Grid.Col span={'content'}>
							<SegmentedControl
								radius={'xl'}
								value={useLowercase.toString()}
								onChange={(value) => {
									setUseLowercase(value === 'true');
								}}
								data={[
									{ label: 'A', value: 'false' },
									{ label: 'a', value: 'true' },
								]}
							/>
						</Grid.Col>
						<Grid.Col span={'content'}>
							<Group spacing={'xs'}>
								<Text style={{ lineHeight: 0 }}>Max antal ord:</Text>
								<Button.Group>
									<Button
										radius={'xl'}
										onClick={() => {
											setMaxWords(1);
										}}
									>
										<IconChevronUp />
									</Button>
									<Button
										radius={'xl'}
										disabled={maxWords === 1}
										onClick={() => {
											setMaxWords(-1);
										}}
									>
										<IconChevronDown />
									</Button>
								</Button.Group>
							</Group>
						</Grid.Col>
						<Grid.Col span={'content'}>
							<Group spacing={'xs'}>
								<Text>Max antal bokstäver:</Text>

								<Button.Group>
									<Button
										radius={'xl'}
										onClick={() => {
											setMaxLetters(1);
										}}
									>
										<IconChevronUp />
									</Button>
									<Button
										radius={'xl'}
										disabled={maxLetters <= 2}
										onClick={() => {
											setMaxLetters(-1);
										}}
									>
										<IconChevronDown />
									</Button>
								</Button.Group>
							</Group>
						</Grid.Col>
					</Grid>
				</Grid.Col>
			</Grid>
		</Container>
	);
};

export default Header;
