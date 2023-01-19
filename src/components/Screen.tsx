import { View } from './View';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ErrorHandler } from '../handlers/errors';
import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
export const Screen = ({ children }: { children: React.ReactNode }) => {
	return (
		<ErrorHandler>
			<SafeAreaView>
				<View height={height} width={width}>
					{children}
				</View>
			</SafeAreaView>
		</ErrorHandler>
	);
};
