import { css } from '@emotion/css';

export const PALETTE = {
	text: '#266370',
	semitransparent: '#ffffff20'
};
export const FONTSIZE = {
	regular: '16px',
	heading: '24px'
};
export const BORDER = {
	width: '2px'
};
export const SHAPE = {
	borderRadius: '4px'
};
export const BOX_SHADOW = `0 2px 5px 0 #00000020`;
export const spacing = (x?: number) => `${x ? x * 4 : 4}px`;

export const header = css`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	padding: 0 ${spacing(5)};
	align-items: center;
	height: 80px;
`;

export const logo = css`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const userControls = css`
	display: flex;
	gap: ${spacing(4)};
	justify-content: flex-end;
`;

export const textButton = css`
	color: ${PALETTE.text};
	background: none;
	border: 0;
	cursor: pointer;
	font-weight: bold;
	font-size: 16px;
`;
