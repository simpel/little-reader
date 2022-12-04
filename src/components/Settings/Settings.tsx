import {
	Button,
	SegmentedControl,
	Group,
	Text,
	Drawer,
	Divider,
	NumberInput,
	Title,
} from '@mantine/core';
import { IconChevronDown, IconChevronUp, IconTrash } from '@tabler/icons';
import useStore from '../../store/Store';

const Settings = () => {
	const setMaxLetters = useStore((state) => state.setMaxLetters);
	const setMaxWords = useStore((state) => state.setMaxWords);
	const maxLetters = useStore((state) => state.maxLetters);
	const maxWords = useStore((state) => state.maxWords);
	const useLowercase = useStore((state) => state.useLowercase);
	const setUseLowercase = useStore((state) => state.setUseLowercase);
	const showSettings = useStore((state) => state.showSettings);
	const setShowSettings = useStore((state) => state.setShowSettings);
	const setHighScore = useStore((state) => state.setHighScore);

	return (
		<Drawer
			opened={showSettings}
			onClose={() => {
				setShowSettings(false);
			}}
			padding="xl"
			size="xl"
			title={
				<Text component={Title} size="md" order={2}>
					Inställningar
				</Text>
			}
			position="right"
			overlayOpacity={0.3}
		>
			<Group position="apart" align={'center'}>
				<Text>Typ av bokstäver</Text>
				<SegmentedControl
					radius={'xl'}
					value={useLowercase.toString()}
					onChange={(value) => {
						setUseLowercase(value === 'true');
					}}
					data={[
						{ label: 'STORA', value: 'false' },
						{ label: 'små', value: 'true' },
					]}
				/>
			</Group>
			<Divider my={'xl'} />

			<Group position="apart" align={'center'}>
				<Text>Max antal bokstäver:</Text>
				<Group spacing={'xs'}>
					<Button
						radius={'xl'}
						onClick={() => {
							setMaxLetters(1);
						}}
					>
						<IconChevronUp />
					</Button>
					<NumberInput
						defaultValue={maxLetters}
						value={maxLetters}
						radius="xl"
						w={60}
						hideControls
						styles={{
							input: {
								textAlign: 'center',
							},
						}}
					/>
					<Button
						radius={'xl'}
						disabled={maxLetters === 2}
						onClick={() => {
							setMaxLetters(-1);
						}}
					>
						<IconChevronDown />
					</Button>
				</Group>
			</Group>
			<Divider my={'xl'} />
			<Group position="apart" align={'center'}>
				<Text>Max antal ord:</Text>
				<Group spacing={'xs'}>
					<Button
						radius={'xl'}
						onClick={() => {
							setMaxWords(1);
						}}
					>
						<IconChevronUp />
					</Button>
					<NumberInput
						defaultValue={maxWords}
						value={maxWords}
						radius="xl"
						w={60}
						hideControls
						styles={{
							input: {
								textAlign: 'center',
							},
						}}
					/>
					<Button
						radius={'xl'}
						disabled={maxWords === 1}
						onClick={() => {
							setMaxWords(-1);
						}}
					>
						<IconChevronDown />
					</Button>
				</Group>
			</Group>
			<Divider my={'xl'} />
			<Group position="apart" align={'center'}>
				<Text>Återställ highscore:</Text>
				<Group spacing={'xs'}>
					<Button
						radius={'xl'}
						color="red"
						leftIcon={<IconTrash />}
						onClick={() => {
							setHighScore(1);
						}}
					>
						Återställ highscore
					</Button>
				</Group>
			</Group>
		</Drawer>
	);
};

export default Settings;
