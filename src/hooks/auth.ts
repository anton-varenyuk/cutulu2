import { writable } from 'svelte/store';
import { login, logout } from '../services/auth';

export const isLoggedIn = writable<boolean>(false);
export const userDetails = writable(null);

export const signIn = async (user) => {
	try {
		const res = await login(user);
		if (res.status === 200) {
			isLoggedIn.set(true);
			userDetails.set(res.data.user);
		}
	} catch (e) {
		console.log(e);
	}
};

export const signOut = async () => {
	try {
		const res = await logout();
		if (res.status === 200) {
			isLoggedIn.set(false);
			userDetails.set(null);
		}
	} catch (e) {
		console.log(e);
	}
};
