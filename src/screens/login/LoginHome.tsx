import { View, Text, TextInput, Button } from 'components';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';

export const LoginHome = () => {
	const { t } = useTranslation();
	return (
		<View flex={1} flexDirection="column">
			<Button label={t('actions.login.signIn')} onPress={() => null} />
			<Button label={t('actions.login.signUp')} onPress={() => null} />
		</View>
	);
};
