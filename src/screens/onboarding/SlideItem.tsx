import Button from '../../components/Button';
import View from 'components/View';
import Text from 'components/Text';
import {type SlideProps} from './index';
import {Image, useWindowDimensions, StyleSheet} from 'react-native';

type SlideItemProps = {
	slide: SlideProps;
};

const SlideItem = ({slide}: SlideItemProps) => {
	const {width} = useWindowDimensions();
	return (
		<View style={{flex: 1, width, justifyContent: 'center', alignItems: 'center'}}>
			<View>
				<Image
					source={slide.image}
					style={{width: width - 50, height: 300, resizeMode: 'contain'}}
				/>
			</View>
			<View style={{flex: 0.3}}>
				<Text variant="title">{slide.title}</Text>
			</View>
			<Button label="Next" labelVariant="title" onPress={() => null} />
		</View>
	);
};

const styles = StyleSheet.create({
	image: {
		flex: 0.7,
		justifyContent: 'center',
	},
});

export default SlideItem;
