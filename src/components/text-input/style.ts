import { css } from '@emotion/css';
import { BORDER, FONTSIZE, PALETTE, spacing } from '../style';

export const input = css`
	font-size: ${FONTSIZE.regular};
	padding: ${spacing()} ${spacing(2)};
	color: #27393d;
	border: ${BORDER.width} solid #aaaaaa;
	background: ${PALETTE.semitransparent};
`;

export const wrapper = css`
	width: 300px;
	display: flex;
	flex-direction: column;
	gap: ${spacing(2)};
`;
