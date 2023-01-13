import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import OnBoarding from '../screens/onboarding';
import { Login } from 'screens/login';

type LoginNavigatorParamList = {
	onBoarding: undefined;
	loginHome: undefined;
	signUp: undefined;
	verifyEmail: undefined;
	signIn: undefined;
};

const Stack = createNativeStackNavigator<LoginNavigatorParamList>();

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
