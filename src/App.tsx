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
import themeStyle from './theme/Styles';

const App = () => {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<MantineProvider theme={themeStyle}>
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
