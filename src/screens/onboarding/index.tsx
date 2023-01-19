import { useRef, useState } from 'react';
import {
	FlatList,
	NativeScrollEvent,
	NativeSyntheticEvent,
	useWindowDimensions,
	ViewabilityConfigCallbackPair,
	type ViewToken,
} from 'react-native';

import SlideItem from './SlideItem';
import { Screen, View, Paginator } from 'components';
import { useSharedValue } from 'react-native-reanimated';
import { useTranslation } from 'react-i18next';
import { OnBoardingProps } from './types';

type ViewableItems = (info: { viewableItems: ViewToken[]; changed: ViewToken[] }) => void;

export type SlideProps = {
	id: number;
	title: string;
	description: string;
	image: any;
};

const OnBoarding = ({ navigation }: OnBoardingProps) => {
	const { t } = useTranslation();
	const { width, height } = useWindowDimensions();
	const [currentSlide, setCurrentSlide] = useState<any>(0);
	const scrollX = useSharedValue(0);
	const flatListRef = useRef<FlatList>(null);
	const onViewableItemsChanged: ViewableItems = ({ viewableItems }) => {
		setCurrentSlide(viewableItems[0].index);
	};

	const viewabilityConfigCallbackPairs = useRef<ViewabilityConfigCallbackPair[]>([
		{ viewabilityConfig: { viewAreaCoveragePercentThreshold: 50 }, onViewableItemsChanged },
	]);

	const slides: SlideProps[] = [
		{
			id: 0,
			title: t('screen.onBoarding.title'),
			description: 'Polar will help you to organize everything',
			image: require('../../../assets/images/start.png'),
		},
		{
			id: 1,
			title: t('screen.onBoarding.title'),
			description: 'Polar will help you to organize everything',
			image: require('../../../assets/images/start.png'),
		},
		{
			id: 2,
			title: t('screen.onBoarding.title'),
			description: 'Polar will help you to organize everything',
			image: require('../../../assets/images/start.png'),
		},
	];

	return (
		<Screen>
			<View style={{ flex: 3 }}>
				<FlatList
					ref={flatListRef}
					data={slides}
					horizontal
					renderItem={({ item, index }) => (
						<SlideItem
							slide={item}
							slidesLength={slides.length}
							currentIndex={index}
							listRef={flatListRef}
							navigation={navigation}
						/>
					)}
					keyExtractor={(_, index) => index.toString()}
					showsHorizontalScrollIndicator={false}
					bounces={false}
					pagingEnabled
					scrollEventThrottle={32}
					onScroll={(e: NativeSyntheticEvent<NativeScrollEvent>) =>
						(scrollX.value = e.nativeEvent.contentOffset.x)
					}
					viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
					viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
				/>
			</View>
			<Paginator slides={slides} scrollX={scrollX} />
		</Screen>
	);
};

export default OnBoarding;
