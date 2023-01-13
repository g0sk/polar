import i18next, { LanguageDetectorModule } from 'i18next';
import { getLocales } from 'expo-localization';
import { initReactI18next } from 'react-i18next';

const resources = {
	'es-ES': {
		translation: require('../../lang/es.json'),
	},
	'en-US': {
		translation: require('../../lang/en.json'),
	},
};

const fallback = 'es-ES';

const languageDetector: LanguageDetectorModule = {
	type: 'languageDetector',
	detect: () => {
		const locales = getLocales();
		return locales.length > 0 ? locales[0].languageTag : fallback;
	},
};

export const t = i18next.t;

export const setI18NextConfig = () => {
	if (!i18next.isInitialized) {
		i18next
			.use(languageDetector)
			.use(initReactI18next)
			.init({
				debug: true,
				resources,
				fallbackLng: 'es-US',
				compatibilityJSON: 'v4',
				interpolation: {
					escapeValue: false,
				},
			});
	}
};
