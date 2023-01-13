import View from 'components/View';
import { Screen } from 'components/Screen';
import { ImageBackground } from 'react-native';
import Text from 'components/Text';
import Button from 'components/Button';

export const Login = () => {
	return (
		<Screen>
			<ImageBackground
				source={require('../../../assets/images/login-home-background.jpg')}
				style={{ height: '100%', width: '100%' }}
			>
				<View flex={1} flexDirection="column" alignItems="center" justifyContent="center">
					<Text variant="title">hello</Text>
					<View flexDirection="column" justifyContent="space-between">
						<Button label="Sign Up" onPress={() => null} />
						<Button label="Sign In" onPress={() => null} />
					</View>
				</View>
			</ImageBackground>
		</Screen>
	);
};
