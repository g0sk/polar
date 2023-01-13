import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import NavigationContainer from './NavigationContainer';
import AuthNavigator from './AuthNavigator';

type RootNavigatorParamList = {
	authNavigator: undefined;
	home: undefined;
	onBoarding: undefined;
};

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

const RootStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="authNavigator"
				component={AuthNavigator}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};

export default function RootNavigator() {
	return (
		<NavigationContainer>
			<RootStack />
		</NavigationContainer>
	);
}
