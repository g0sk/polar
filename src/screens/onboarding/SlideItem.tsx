import { View, Text, Button } from 'components';
import { type SlideProps } from './index';
import { FlatList, Image, useWindowDimensions } from 'react-native';
import { OnBoardingNavigationProp } from './types';
import { RefObject } from 'react';

type SlideItemProps = {
	slide: SlideProps;
	slidesLength: number;
	listRef: RefObject<FlatList<any>>;
	currentIndex: number;
	navigation: OnBoardingNavigationProp;
};

const SlideItem = ({
	slide,
	slidesLength,
	currentIndex,
	listRef,
	navigation,
}: SlideItemProps) => {
	const { width } = useWindowDimensions();
	const buttonLabel = currentIndex === slidesLength - 1 ? 'Start' : 'Next';
	const goToNextSlide = () => {
		if (currentIndex < slidesLength - 1) {
			listRef.current?.scrollToIndex({ animated: true, index: currentIndex + 1 });
		} else {
			navigation.navigate('loginHome');
		}
	};
	return (
		<View style={{ flex: 1, width, justifyContent: 'center', alignItems: 'center' }}>
			<View>
				<Image
					source={slide.image}
					style={{ width: width - 50, height: 300, resizeMode: 'contain' }}
				/>
			</View>
			<View style={{ flex: 0.3 }}>
				<Text variant="title">{slide.title}</Text>
			</View>
			<Button label={buttonLabel} onPress={() => goToNextSlide()} />
		</View>
	);
};

export default SlideItem;
