export const curry = (fn) => {
	return function (...args) {
		if (args.length >= fn.length) {
			return fn(...args);
		} else {
			return curry(fn.bind(null, ...args));
		}
	};
};
