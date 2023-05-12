import { error } from '@sveltejs/kit';

export const load = ({ params }) => {
	if (params.slug === 'kek') {
		return { title: 'keke!', content: 'dwd' };
	}

	throw error(404, 'not founddddd');
};
