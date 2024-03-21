import i18n from 'sveltekit-i18n';
import lang from './i18n/lang.json';

const config = {
	translations: {
		en: { lang },
		'uk-UA': { lang }
	},
	loaders: [
		{
			locale: 'en',
			key: 'common',
			loader: async () => (await import('./i18n/en.json')).default
		},
		{
			locale: 'uk-UA',
			key: 'common',
			loader: async () => (await import('./i18n/ua.json')).default
		}
	]
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
