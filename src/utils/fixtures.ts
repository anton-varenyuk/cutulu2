// TODO: move types somewhere

export interface IExample {
	id: number;
	name: string;
	icon: string;
	description: string;
}

export interface ICanvasRenderCollection {
	[key: string]: (ctx: CanvasRenderingContext2D) => Record<unknown, unknown>;
}

export type ExamplesCollection = { [key: string]: IExample };
export type ExampleId = keyof ExamplesCollection;

export interface IExampleLibrary {
	[key: string]: IExample;
}

export const Examples = {
	singleton: {
		id: 'singleton',
		name: 'Singleton',
		icon: 'icon-park-outline:one',
		description: 'this is singleton example demo'
	}
};

// RENDER FUNCTIONS
const singleton = (ctx: CanvasRenderingContext2D): Record<unknown, unknown> => {
	// Pattern logic
	class Singleton {
		private static instance: Singleton;
		public message: string;

		private constructor() {
			this.message = 'Hello. I am singleton';
		}

		public static getInstance(): Singleton {
			if (!Singleton.instance) {
				Singleton.instance = new Singleton();
			}
			return Singleton.instance;
		}
	}

	// Visualisation logic
	const instance1 = Singleton.getInstance();
	const instance2 = Singleton.getInstance();

	if (instance1 === instance2) {
		ctx.font = '18px serif';
		ctx.fillStyle = '#fefefe';
		ctx.fillText(instance1.message, 10, 50);
		ctx.fillText('and both my variables contain the same instance!', 10, 70);
	}

	return Singleton;
};

export const canvasRenderCollection: ICanvasRenderCollection = {
	singleton
};
