import { useRef, useState } from 'react';
import {
	FlatList,
	NativeScrollEvent,
	NativeSyntheticEvent,
	useWindowDimensions,
	ViewabilityConfigCallbackPair,
	type ViewToken,
} from 'react-native';
import { Screen } from '../../components/Screen';
import View from '../../components/View';
import SlideItem from './SlideItem';
import { Paginator } from '../../components/Paginator';
import { useSharedValue } from 'react-native-reanimated';
import { useTranslation } from 'react-i18next';

type ViewableItems = (info: { viewableItems: ViewToken[]; changed: ViewToken[] }) => void;

export type SlideProps = {
	id: number;
	title: string;
	description: string;
	image: any;
};

const OnBoarding = () => {
	const { t } = useTranslation();
	const { width, height } = useWindowDimensions();
	const [currentPage, setCurrentPage] = useState<any>(0);
	const scrollX = useSharedValue(0);
	const flatListRef = useRef<FlatList>(null);
	const onViewableItemsChanged: ViewableItems = ({ viewableItems }) => {
		setCurrentPage(viewableItems[0].index);
	};

	const viewabilityConfigCallbackPairs = useRef<ViewabilityConfigCallbackPair[]>([
		{ viewabilityConfig: { viewAreaCoveragePercentThreshold: 50 }, onViewableItemsChanged },
	]);

	const slides: SlideProps[] = [
		{
			id: 0,
			title: 'Welcome to polar!',
			description: 'Polar will help you to organize everything',
			image: require('../../../assets/images/welcome.png'),
		},
		{
			id: 1,
			title: 'Ideas',
			description: 'Your ideas should be on paper not floating around yout mind all day',
			image: require('../../../assets/images/ideas.png'),
		},
		{
			id: 1,
			title: 'Ideas',
			description: 'Your ideas should be on paper not floating around yout mind all day',
			image: require('../../../assets/images/ideas.png'),
		},
		{
			id: 1,
			title: 'Ideas',
			description: 'Your ideas should be on paper not floating around yout mind all day',
			image: require('../../../assets/images/ideas.png'),
		},
		{
			id: 1,
			title: 'Ideas',
			description: 'Your ideas should be on paper not floating around yout mind all day',
			image: require('../../../assets/images/ideas.png'),
		},
		{
			id: 1,
			title: 'Ideas',
			description: 'Your ideas should be on paper not floating around yout mind all day',
			image: require('../../../assets/images/ideas.png'),
		},
	];

	return (
		<Screen>
			<View style={{ flex: 3 }}>
				<FlatList
					ref={flatListRef}
					data={slides}
					horizontal
					renderItem={({ item }) => <SlideItem slide={item} />}
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
