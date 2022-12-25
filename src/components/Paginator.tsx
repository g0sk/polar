import {StyleSheet, useWindowDimensions} from 'react-native';
import View from './View';
import {type SlideProps} from '../screens/onboarding';
import Animated, {
	Extrapolate,
	interpolate,
	SharedValue,
	useAnimatedStyle,
} from 'react-native-reanimated';

type PaginatorProps = {slides: SlideProps[]; scrollX: SharedValue<number>};

export const Paginator = ({slides, scrollX}: PaginatorProps) => {
	const {width} = useWindowDimensions();

	return (
		<View flex={1} flexDirection="row" height={64} justifyContent="center" alignItems="center">
			{slides.map((_, i) => {
				const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
				const outputRange = [10, 20, 10];
				const animatedStyle = useAnimatedStyle(() => {
					const width = interpolate(scrollX.value, inputRange, outputRange, Extrapolate.CLAMP);
					const opacity = interpolate(scrollX.value, inputRange, [0.3, 1, 0.3], Extrapolate.CLAMP);
					return {
						width,
						opacity,
					};
				});
				return (
					<Animated.View
						key={i.toString()}
						style={[
							{
								height: 10,
								borderRadius: 5,
								backgroundColor: 'black',
								marginHorizontal: 8,
							},
							animatedStyle,
						]}
					/>
				);
			})}
		</View>
	);
};
