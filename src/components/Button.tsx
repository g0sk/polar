import {TouchableOpacity} from 'react-native';
import Text from './Text';
import {Theme} from '../theme';
import View from './View';

type ButtonProps = {
	label: string;
	disabled?: boolean;
	onPress: () => void;
	labelVariant: Partial<keyof Theme['textVariants']>;
};

const Button = ({label, labelVariant, disabled = false, onPress}: ButtonProps) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<View
				alignItems="center"
				width={200}
				height={50}
				padding="m"
				backgroundColor="softGray"
				borderRadius="m"
			>
				<Text variant={labelVariant}>{label}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default Button;
