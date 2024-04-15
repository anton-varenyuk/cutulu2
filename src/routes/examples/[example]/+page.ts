import { error } from '@sveltejs/kit';
import { Examples } from '../../../examples/patterns';

export const load = ({ params: { example } }) => {
	const exampleBody = Examples[example];

	if (exampleBody) {
		return exampleBody;
	}

	throw error(404, 'Not found');
};
