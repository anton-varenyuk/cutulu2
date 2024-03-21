import { loadTranslations } from '../i18n';

export const load = async () => {
	const initialLocale = 'en'; // get from cookie / url / fetch from server...

	await loadTranslations(initialLocale); // keep this just before the `return`

	return {};
};
