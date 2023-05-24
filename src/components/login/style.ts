import { css } from '@emotion/css';
import { spacing } from '../style';

export const form = css`
	display: flex;
	flex-direction: column;
	gap: ${spacing(2)};

	button {
		margin-top: ${spacing(4)};
	}
`;
