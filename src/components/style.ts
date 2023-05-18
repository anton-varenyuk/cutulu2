import { css } from '@emotion/css';

export const header = css`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	padding: 0 20px;
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
	justify-content: flex-end;
`;

export const textButton = css`
	color: #266370;
	background: none;
	border: 0;
	cursor: pointer;
	font-weight: bold;
	font-size: 16px;
`;
