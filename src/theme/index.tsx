import * as React from 'react';
import {
	useTheme as useReTheme,
	ThemeProvider as RestyleProvider,
	TextProps,
	BoxProps,
	BorderProps,
} from '@shopify/restyle';

type ThemeType = typeof BaseTheme & {
	textVariants: {[key: string]: TextProps<typeof BaseTheme>};
	buttonVariants: {[key: string]: BorderProps<typeof BaseTheme>};
};

const createTheme = <T extends ThemeType>(themeObject: T): T => themeObject;

const palette = {
	softGray: '#e7e7e7',
};

const BaseTheme = {
	colors: palette,
	borderRadius: {
		m: 20,
	},
	borderRadii: {
		m: 20,
	},
	spacing: {
		s: 8,
		m: 16,
		l: 24,
		xl: 40,
	},
	margin: {},
	breakpoints: {},
};

const theme = createTheme({
	...BaseTheme,
	textVariants: {
		title: {},
	},
	buttonVariants: {},
	navigation: {
		dark: false,
		colors: {},
	},
});

const darkTheme = createTheme({
	...BaseTheme,
	textVariants: {
		title: {},
	},
	buttonVariants: {},
	navigation: {
		dark: true,
		colors: {},
	},
});

export type Theme = typeof theme;
export const useTheme = () => useReTheme<Theme>();
export const ThemeProvider = ({children}: {children: React.ReactNode}) => (
	<RestyleProvider theme={theme}>{children}</RestyleProvider>
);
