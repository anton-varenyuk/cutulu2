// TODO: move types somewhere

import { client, Creator, Dude1, Dude2, DudeCreator1, DudeCreator2 } from './patterns/factory';
import { client as abstract, CatFactory, DogFactory, Cat } from './patterns/abstract-factory';
import { Singleton } from './patterns/singleton';
import {
	client as builderClient,
	Director,
	AbominationBuilder,
	abom1,
	abom2
} from './patterns/builder';
import {
	dev,
	juniorDev,
	juniorSeniorDev,
	juniorSeniorFullstackDev,
	client as decoratorClient,
	Decorator,
	DeveloperComponent
} from './patterns/decorator';
import { DateFacade, DayOfMonth, MonthCalculator, DaysCalculator } from './patterns/facade';

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
	},
	builder: {
		id: 'builder',
		name: 'Builder',
		icon: 'fluent-mdl2:build-definition',
		description:
			'Builder is a creational design pattern, which allows constructing complex objects step by step'
	},
	decorator: {
		id: 'decorator',
		name: 'Decorator',
		icon: 'material-symbols:layers-outline-rounded',
		description:
			'Decorator is a structural design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.'
	},
	facade: {
		id: 'facade',
		name: 'Facade',
		icon: 'material-symbols:garage-home-outline',
		description:
			'Facade is a structural design pattern that provides a simplified (but limited) interface to a complex system of classes, library or framework.'
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

const builder = (ctx: CanvasRenderingContext2D) => {
	ctx.font = '24px serif';
	ctx.fillStyle = '#fefefe';

	// first abomination
	const director = new Director(abom1);
	const client = builderClient(director);

	ctx.fillText(`Abomination 1 has: `, 10, 50);
	client.parts.forEach((part, i) => {
		ctx.fillText(`${part.number} ${part.type}`, 10, i * 50 + 100);
	});

	// second abomination
	const director2 = new Director(abom2);
	const client2 = builderClient(director2);

	ctx.fillText(`Abomination 2 has: `, 350, 50);
	client2.parts.forEach((part, i) => {
		ctx.fillText(`${part.number} ${part.type}`, 350, i * 50 + 100);
	});

	return `
		${AbominationBuilder}
		${Director}
	`;
};

const decorator = (ctx: CanvasRenderingContext2D) => {
	ctx.font = '24px serif';
	ctx.fillStyle = '#fefefe';

	// each wrapper envelops previous one
	const simpleDev = decoratorClient(dev);
	const junior = decoratorClient(juniorDev);
	const juniorSenior = decoratorClient(juniorSeniorDev);
	const fullstack = decoratorClient(juniorSeniorFullstackDev);

	ctx.fillText(`Kolia says: ${simpleDev}`, 20, 150);
	ctx.fillText(`Vasya says: ${junior}`, 20, 200);
	ctx.fillText(`Petya says: ${juniorSenior}`, 20, 250);
	ctx.fillText(`Vova says: ${fullstack}`, 20, 300);

	return `
		${DeveloperComponent}
		${Decorator}
	`;
};

const facade = (ctx: CanvasRenderingContext2D) => {
	ctx.font = '24px serif';
	ctx.fillStyle = '#fefefe';

	const today = new DateFacade().todayIs();
	ctx.fillText(`${today}`, 20, 150);

	return `
		${DateFacade}
		${DaysCalculator}
		${MonthCalculator}
		${DayOfMonth}
	`;
};

export const canvasRenderCollection: ICanvasRenderCollection = {
	singleton,
	factory,
	abstractFactory,
	builder,
	decorator,
	facade
};
