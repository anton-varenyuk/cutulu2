import { css } from '@emotion/css';
import { BORDER, FONTSIZE, PALETTE, spacing } from '../style';

export const input = css`
	font-size: ${FONTSIZE.regular};
	padding: ${spacing()} ${spacing(2)};
	color: #27393d;
	border-width: ${BORDER.width};
	border-color: transparent;
	background: ${PALETTE.semitransparent};
`;
