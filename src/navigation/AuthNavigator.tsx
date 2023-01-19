import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding from '../screens/onboarding';
import { Login } from 'screens/login';
import { OnBoardingNavigationProp } from 'screens/onboarding/types';

export type AuthNavigatorParamList = {
	onBoarding: undefined;
	loginHome: undefined;
	signUp: undefined;
	verifyEmail: undefined;
	signIn: undefined;
};

const Stack = createNativeStackNavigator<AuthNavigatorParamList>();

const AuthNavigator = () => {
	return (
		<Stack.Navigator initialRouteName="onBoarding">
			<Stack.Screen
				name="onBoarding"
				component={OnBoarding}
				options={{ headerShown: false }}
			/>
			<Stack.Screen name="loginHome" component={Login} options={{ headerShown: false }} />
		</Stack.Navigator>
	);
};

export default AuthNavigator;
