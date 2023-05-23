import { css } from '@emotion/css';
import { BOX_SHADOW, PALETTE, spacing } from '../../style';

export const item = css`
	width: 100px;
	color: ${PALETTE.text};
	padding: ${spacing()};
	height: 100px;
	box-shadow: ${BOX_SHADOW};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	cursor: pointer;
`;

export const title = css`
	text-align: center;
`;
