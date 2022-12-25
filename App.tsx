import RootNavigator from './src/navigation/RootNavigator';
import {ThemeProvider} from './src/theme';
import {StatusBar} from 'expo-status-bar';

export default function App() {
	return (
		<ThemeProvider>
			<StatusBar animated style="auto" />
			<RootNavigator />
		</ThemeProvider>
	);
}
