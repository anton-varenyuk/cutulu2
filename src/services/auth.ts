const USERNAME_MOCK = '123';
const PASSWORD_MOCK = '123';

export const login = async (user) => {
	// mock authorization
	if (user.name === USERNAME_MOCK && user.password === PASSWORD_MOCK) {
		return { status: 200, data: { user } };
	} else {
		throw new Error('Bad credentials');
	}
};

export const logout = async () => {
	return { status: 200 };
};
