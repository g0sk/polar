import { createText, createVariant } from '@shopify/restyle';
import { Theme } from '../theme';

export const Text = createText<Theme>();
export const textVariants = createVariant<any, 'textVariants'>({
	themeKey: 'textVariants',
});
