// TODO: move types somewhere

export interface IExample {
	id: number;
	name: string;
	codePreview: string;
	icon: string;
	description: string;
}

export interface ICanvasRenderCollection {
	[key: string]: (ctx: CanvasRenderingContext2D) => void;
}

export type ExamplesCollection = { [key: string]: IExample };
export type ExampleId = keyof ExamplesCollection;

export interface IExampleLibrary {
	[key: string]: IExample;
}

const textMock =
	"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ";

export const Examples = {
	test: {
		id: 'test',
		name: 'test example',
		codePreview: `test test test test test`,
		icon: 'material-symbols:source-notes-outline-rounded',
		description: textMock
	},
	test2: {
		id: 'test2',
		name: 'new example',
		codePreview: `test test test test test`,
		icon: 'material-symbols:kitesurfing',
		description: textMock
	}
};

// RENDER FUNCTIONS
const test = (ctx: CanvasRenderingContext2D): void => {
	ctx.fillRect(25, 25, 100, 150);
	ctx.clearRect(45, 45, 60, 60);
	ctx.strokeRect(50, 50, 50, 50);
};

const test2 = (ctx: CanvasRenderingContext2D): void => {
	ctx.fillRect(25, 25, 80, 80);
	ctx.clearRect(45, 45, 60, 60);
	ctx.strokeRect(50, 50, 50, 50);
};

export const canvasRenderCollection: ICanvasRenderCollection = {
	test,
	test2
};
