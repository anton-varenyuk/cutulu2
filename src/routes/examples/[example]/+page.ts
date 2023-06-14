import { Examples } from '../../../utils/fixtures';
import { error } from '@sveltejs/kit';

export const load = ({ params: { example } }) => {
	const exampleBody = Examples[example];

	if (exampleBody) {
		return exampleBody;
	}

	throw error(404, 'Not found');
};
