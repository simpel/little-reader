import {
	AppShell,
	Center,
	Footer as MantineFooter,
	Header as MantineHeader,
	MantineProvider,
} from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Sentence from './components/sentence/Sentence';

const App = () => {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<MantineProvider
				theme={{
					fontFamily: 'Comfortaa, sans-serif',
					headings: { fontFamily: 'Comfortaa, sans-serif' },
					fontSizes: {
						xs: 12,
						sm: 14,
						md: 16,
						lg: 24,
						xl: 48,
					},
					globalStyles: (theme) => ({
						'*, *::before, *::after': {
							boxSizing: 'border-box',
						},
						body: {
							...theme.fn.fontStyles(),
							margin: 0,
							padding: 0,
							backgroundColor:
								theme.colorScheme === 'dark'
									? theme.colors.dark[7]
									: theme.colors.green[0],
							color:
								theme.colorScheme === 'dark'
									? theme.colors.dark[0]
									: theme.black,
							lineHeight: theme.lineHeight,
						},
					}),
				}}
			>
				<AppShell
					padding={0}
					footer={
						<MantineFooter
							children={<Footer />}
							height={90}
							fixed
							withBorder={false}
						/>
					}
					header={
						<MantineHeader
							children={<Header />}
							fixed
							height={95}
							withBorder={false}
						/>
					}
				>
					<Center
						style={{
							height: 'calc(100vh - 185px)',
						}}
					>
						<Sentence />
					</Center>
				</AppShell>
			</MantineProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};

export default App;
