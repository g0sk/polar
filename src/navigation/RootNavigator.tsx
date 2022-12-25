import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import NavigationContainer from './NavigationContainer';
import OnBoarding from '../screens/onboarding';

type RootNavigatorParamList = {
	login: undefined;
	home: undefined;
	onBoarding: undefined;
};

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

const RootStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="onBoarding" component={OnBoarding} options={{headerShown: false}} />
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
