import { EXAMPLES } from '../../../utils/fixtures';

export const load = ({ params }) => {
	const example = EXAMPLES[params.slug];

	if (example) {
		console.log('params: ', example);
	}
};
