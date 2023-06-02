// TODO: move types somewhere

import { client, Creator, Dude1, Dude2, DudeCreator1, DudeCreator2 } from './patterns/factory';
import { client as abstract, CatFactory, DogFactory, Cat } from './patterns/abstract-factory';
import { Singleton } from './patterns/singleton';

export interface IExample {
	id: number;
	name: string;
	icon: string;
	description: string;
}

export interface ICanvasRenderCollection {
	[key: string]: (ctx: CanvasRenderingContext2D) => string;
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
		description:
			'Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.'
	},
	factory: {
		id: 'factory',
		name: 'Factory',
		icon: 'material-symbols:factory-outline',
		description:
			'Factory Method is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.'
	},
	abstractFactory: {
		id: 'abstractFactory',
		name: 'Abstract Factory',
		icon: 'material-symbols:draw-abstract-outline',
		description:
			'Abstract Factory is a creational design pattern, which solves the problem of creating entire product families without specifying their concrete classes.'
	}
};

// RENDER FUNCTIONS
const singleton = (ctx: CanvasRenderingContext2D): string => {
	const instance1 = Singleton.getInstance();
	const instance2 = Singleton.getInstance();

	if (instance1 === instance2) {
		ctx.font = '18px serif';
		ctx.fillStyle = '#fefefe';
		ctx.fillText(instance1.message, 10, 50);
		ctx.fillText('and both my variables contain the same instance!', 10, 70);
	}

	return `${Singleton}`;
};

const factory = (ctx: CanvasRenderingContext2D) => {
	const dude1 = client(new DudeCreator1());
	const dude2 = client(new DudeCreator2());

	ctx.font = '24px serif';
	ctx.fillStyle = '#fefefe';
	ctx.fillText(dude1, 10, 50);
	ctx.fillText(dude2, 10, 90);

	return `
		${Creator}
		${Dude1} 
		${Dude2}
		${DudeCreator1} 
		${DudeCreator2}
		${client}
	`;
};

const abstractFactory = (ctx: CanvasRenderingContext2D) => {
	const cats = abstract(new CatFactory());
	const dogs = abstract(new DogFactory());

	ctx.font = '24px serif';
	ctx.fillStyle = '#fefefe';
	ctx.fillText(cats.product.say(), 10, 50);
	ctx.fillText(dogs.product.say(), 10, 90);

	ctx.fillText(`kitten has size ${cats.subProduct.size}`, 10, 150);
	ctx.fillText(`puppy has size ${dogs.subProduct.size}`, 10, 190);

	return `
		${CatFactory} 
		${Cat}
		${abstract}
	`;
};

export const canvasRenderCollection: ICanvasRenderCollection = {
	singleton,
	factory,
	abstractFactory
};
