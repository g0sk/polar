import RootNavigator from './src/navigation/RootNavigator';
import { ThemeProvider } from './src/theme';
import { StatusBar } from 'expo-status-bar';
import { useAppState } from 'hooks/useAppState';
import { AppStateStatus, Platform } from 'react-native';
import { focusManager, QueryClientProvider } from '@tanstack/react-query';
import QueryClient from 'lib/tanstack';
import { useOnlineManager } from 'hooks/useOnlineManager';
import { I18nextProvider } from 'react-i18next';
import i18next from 'core/i18n';

function onAppStateChange(status: AppStateStatus) {
	if (Platform.OS !== 'web') {
		focusManager.setFocused(status === 'active');
	}
}

export default function App() {
	useOnlineManager();
	useAppState(onAppStateChange);
	return (
		<QueryClientProvider client={QueryClient}>
			<I18nextProvider i18n={i18next}>
				<ThemeProvider>
					<StatusBar animated style="auto" />
					<RootNavigator />
				</ThemeProvider>
			</I18nextProvider>
		</QueryClientProvider>
	);
}
