import { TextInput as RNTextInput, TextInputProps as RNTextInputProps } from 'react-native';
import { View } from './View';
import { Text } from './Text';

interface TextInputProps extends RNTextInputProps {
	setValue: (text: string) => void;
	touched: boolean;
	error: boolean;
}

export const TextInput = ({ setValue }: TextInputProps) => {
	return (
		<View>
			<RNTextInput onChange={(t) => setValue(t.nativeEvent.text)} />
		</View>
	);
};
