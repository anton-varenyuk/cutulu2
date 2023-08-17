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
import { Button, Mediator } from './patterns/mediator';
import { Publisher, Subscriber } from './patterns/observable';

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
	},
	mediator: {
		id: 'mediator',
		name: 'Mediator',
		icon: 'material-symbols:interactive-space-outline-sharp',
		description:
			'Mediator is a behavioral design pattern that reduces coupling between components of a program by making them communicate indirectly, through a special mediator object.'
	},
	observable: {
		id: 'observable',
		name: 'Observable',
		icon: 'ph:binoculars',
		description:
			'Observer is a behavioral design pattern that allows some objects to notify other objects about changes in their state.'
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

const mediator = (ctx: CanvasRenderingContext2D) => {
	const button1 = new Button(0);
	const button2 = new Button(0);
	const mediator = new Mediator(button1, button2);

	const drawButtons = () => {
		ctx.clearRect(0, 0, 600, 600);
		ctx.font = '24px serif';
		ctx.fillStyle = '#fefefe';

		ctx.fillText('Click on buttons to make it work', 50, 300);

		ctx.fillRect(20, 20, 150, 100);
		ctx.fillRect(300, 20, 150, 100);

		ctx.fillStyle = '#171717';
		ctx.fillText(`btn1: ${button1.value}`, 30, 70);
		ctx.fillText(`btn2: ${button2.value}`, 310, 70);
	};

	drawButtons();

	const canvas = document.getElementById('canvas');
	canvas.addEventListener('click', (e) => {
		const target = e.target as Element;
		const canvasRect = target.getBoundingClientRect();

		const clickCanvasX = e.pageX - canvasRect.left;
		const clickCanvasY = e.pageY - canvasRect.top;

		// Button 1 click
		if (
			clickCanvasX >= 20 &&
			clickCanvasX <= 20 + 150 &&
			clickCanvasY >= 20 &&
			clickCanvasY <= 20 + 100
		) {
			button1.onChange();
		}
		// Button 2 click
		if (
			clickCanvasX >= 300 &&
			clickCanvasX <= 300 + 150 &&
			clickCanvasY >= 20 &&
			clickCanvasY <= 20 + 100
		) {
			button2.onChange();
		}

		drawButtons();
	});

	return `
		${Mediator}
		${Button}
	`;
};


const observable = (ctx: CanvasRenderingContext2D) => {
	const publisher = new Publisher();
	const subscriber = new Subscriber();
	const subscriber2 = new Subscriber();

	subscriber.subscribe(publisher);
	subscriber2.subscribe(publisher);
	publisher.init();

	const draw = () => {
		ctx.clearRect(0, 0, 600, 600);
		ctx.font = '24px serif';

		ctx.fillStyle = '#4aaff7';
		ctx.fillText('Observable', 150, 300);
		ctx.fillText(`${publisher.state.timer}`, 150, 330);
		
		ctx.fillStyle = '#fefefe';
		ctx.fillText(`Subscriber 1`, 30, 40)
		ctx.fillText(`${subscriber.state.timer}`, 30, 70)

		ctx.fillStyle = '#a8eb34';
		ctx.fillText(`Subscriber 2`, 200, 40)
		ctx.fillText(`${subscriber2.state.timer}`, 200, 70)
	}

	const interval = setInterval(() => draw(), 1000)

	return `
		${Publisher}
		${Subscriber}
	`;

}

export const canvasRenderCollection: ICanvasRenderCollection = {
	singleton,
	factory,
	abstractFactory,
	builder,
	decorator,
	facade,
	mediator,
	observable,
};
