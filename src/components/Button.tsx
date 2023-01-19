import { TouchableOpacity, View } from 'react-native';
import { Text } from './Text';
import { Theme } from '../theme';

import {
	BackgroundColorProps,
	BorderProps,
	SpacingProps,
	VariantProps,
} from '@shopify/restyle';

type ButtonProps = {
	label: string;
	disabled?: boolean;
	onPress: () => void;
};

type RestyleButtonProps = SpacingProps<Theme> &
	BorderProps<Theme> &
	BackgroundColorProps<Theme> &
	VariantProps<Theme, 'buttonVariants'>;

type Props = RestyleButtonProps & ButtonProps;

export const Button = ({
	label,
	disabled = false,
	onPress,
	variant = 'default',
	...rest
}: Props) => {
	const textVariant: Partial<keyof Theme['textVariants']> = `button_${variant}`;
	return (
		<TouchableOpacity onPress={onPress}>
			<View {...rest}>
				<Text variant={textVariant}>{label}</Text>
			</View>
		</TouchableOpacity>
	);
};
