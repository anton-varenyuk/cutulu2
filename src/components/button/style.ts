import { css } from '@emotion/css';
import { FONTSIZE, PALETTE, spacing } from '../style';

export const btn = css`
	padding: ${spacing(2)};
	font-size: ${FONTSIZE.regular};
	background: ${PALETTE.text};
	color: #ffffff;
	border: none;
	cursor: pointer;

	&:disabled {
		background: ${PALETTE.pale};
	}
`;
