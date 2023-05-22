import { Examples } from '../../../utils/fixtures';
import { error } from '@sveltejs/kit';

export const load = ({ params }) => {
	const example = Examples[params.slug];

	if (example) {
		return example;
	}

	throw error(404, 'Not found');
};
