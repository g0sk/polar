import { type AuthNavigatorParamList } from 'navigation/AuthNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type OnBoardingNavigationProp = NativeStackNavigationProp<
	AuthNavigatorParamList,
	'onBoarding'
>;

export type OnBoardingProps = { navigation: OnBoardingNavigationProp };
