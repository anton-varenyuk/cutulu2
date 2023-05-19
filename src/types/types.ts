export interface ICreds {
	name: string;
	password: string;
}

export enum Update {
	CHANGE = 'change',
	CLICK = 'click'
}

export interface IExample {
	id: number;
	name: string;
	codePreview: string;
	icon: string;
	description: string;
	sourceCode: string;
}

export interface IExampleLibrary {
	[key: string]: IExample;
}
