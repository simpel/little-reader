import type { MantineThemeOverride } from '@mantine/core';

const themeStyle: MantineThemeOverride = {
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
			margin: 0,
			padding: 0,
			backgroundColor:
				theme.colorScheme === 'dark'
					? theme.colors.dark[7]
					: theme.colors.green[0],
			color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
			lineHeight: theme.lineHeight,
		},
	}),
};

export default themeStyle;
