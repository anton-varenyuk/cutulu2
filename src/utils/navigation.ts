import { goto } from '$app/navigation';
import { browser } from '$app/environment';

export const navigateTo = async (route: string, replaceState?: boolean) => {
	if (browser) {
		await goto(`/${route}`, { replaceState });
	}
};
