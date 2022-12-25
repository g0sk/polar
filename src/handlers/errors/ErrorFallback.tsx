import View from '../../components/View';
import Text from '../../components/Text';
import {Dimensions, TouchableOpacity} from 'react-native';
import RNRestart from 'react-native-restart';

const {height, width} = Dimensions.get('window');

export const ErrorFallback = ({resetBoundary}: any) => {
	const reset = () => {
		resetBoundary();
		RNRestart.Restart();
	};

	return (
		<View height={height} width={width}>
			<Text>Error</Text>
			<TouchableOpacity onPress={() => reset()}>
				<Text>Reload</Text>
			</TouchableOpacity>
		</View>
	);
};
