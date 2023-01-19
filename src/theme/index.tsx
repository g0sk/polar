import * as React from 'react';
import {
	useTheme as useReTheme,
	ThemeProvider as RestyleProvider,
	TextProps,
	BorderProps,
	SpacingProps,
	LayoutProps,
} from '@shopify/restyle';

type ThemeType = typeof BaseTheme & {
	textVariants: { [key: string]: TextProps<typeof BaseTheme> };
	buttonVariants: {
		[key: string]: BorderProps<typeof BaseTheme> &
			SpacingProps<typeof BaseTheme> &
			LayoutProps<typeof BaseTheme>;
	};
};

const createTheme = <T extends ThemeType>(themeObject: T): T => themeObject;

const palette = {
	white: '#FFFFFF',
	black: '#000000',
	lightRed: 'rgb(255,59,48)',
	lightOrange: 'rgb(255,149,0)',
	lightYellow: 'rgb(255,204,0)',
	lightGreen: 'rgb(52,199,89)',
	lightMint: 'rgb(0,199,190)',
	lightTeal: 'rgb(48,176,199)',
	lightCyan: 'rgb(50,173,230)',
	lightBlue: 'rgb(0,122,255)',
	lightIndigo: 'rgb(88,86,214)',
	lightPurple: 'rgb(175,82,222)',
	lightPink: 'rgb(255,45,85)',
	lightBrown: 'rgb(162,132,94)',
	lightGray: 'rgb(142,142,147)',
	lightGray2: 'rgb(174,174,178)',
	lightGrey3: 'rgb(199,199,204)',
	lightGrey4: 'rgb(209,209,214)',
	lightGrey5: 'rgb(229,229,234)',
	lightGrey6: 'rgb(242,242,247)',
	darkRed: 'rgb(255,69,58)',
	darkOrange: 'rgb(255,159,10)',
	darkYellow: 'rgb(255,214,10)',
	darkGreen: 'rgb(48,209,88)',
	darkMint: 'rgb(99,230,226)',
	darkTeal: 'rgb(64,200,224)',
	darkCyan: 'rgb(100,210,255)',
	darkBlue: 'rgb(10,132,255)',
	darkIndigo: 'rgb(94,92,230)',
	darkPurple: 'rgb(191,90,242)',
	darkPink: 'rgb(255,55,95)',
	darkBrown: 'rgb(172,142,104)',
	darkGray: 'rgb(142,142,147)',
	darkGray2: 'rgb(99,99,102)',
	darkGray3: 'rgb(72,72,74)',
	darkGray4: 'rgb(58,58,60)',
	darkGray5: 'rgb(44,44,46)',
	darkGray6: 'rgb(28,28,30)',
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
		button_default: {},
	},
	buttonVariants: {
		default: {
			width: 300,
			height: 85,
			backgroundColor: 'lightPurple',
		},
	},
	navigation: {
		dark: false,
		colors: {},
	},
});

const darkTheme = createTheme({
	...BaseTheme,
	textVariants: {
		title: {},
		button_default: {},
	},
	buttonVariants: {
		default: {
			width: 300,
			height: 85,
			backgroundColor: 'lightPurple',
		},
	},
	navigation: {
		dark: true,
		colors: {},
	},
});

export type Theme = typeof theme;
export const useTheme = () => useReTheme<Theme>();
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => (
	<RestyleProvider theme={theme}>{children}</RestyleProvider>
);
