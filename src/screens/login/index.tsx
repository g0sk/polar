import { Screen, View, Text, Button } from 'components';
import { ImageBackground } from 'react-native';
import z from 'zod';

const LoginSchema = z.object({
	email: z.string().email().min(4),
	password: z.string().min(8),
});

export const Login = () => {
	return (
		<Screen>
			<View flex={1} flexDirection="column" alignItems="center" justifyContent="center">
				<Text variant="title">hello</Text>
				<View flexDirection="column" justifyContent="space-between">
					<Button label="Sign Up" onPress={() => null} />
					<Button label="Sign In" onPress={() => null} />
				</View>
			</View>
		</Screen>
	);
};
