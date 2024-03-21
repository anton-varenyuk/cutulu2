// TODO: move types somewhere

import { client, Creator, Dude1, Dude2, DudeCreator1, DudeCreator2 } from '../patterns/factory';
import { client as abstract, CatFactory, DogFactory, Cat } from '../patterns/abstract-factory';
import { Singleton } from '../patterns/singleton';
import {
	client as builderClient,
	Director,
	AbominationBuilder,
	abom1,
	abom2
} from '../patterns/builder';
import {
	dev,
	juniorDev,
	juniorSeniorDev,
	juniorSeniorFullstackDev,
	client as decoratorClient,
	Decorator,
	DeveloperComponent
} from '../patterns/decorator';
import { DateFacade, DayOfMonth, MonthCalculator, DaysCalculator } from '../patterns/facade';
import { Button, Mediator } from '../patterns/mediator';
import { Publisher, Subscriber } from '../patterns/observable';
import { Dog, Cat as VisitorCat, Visitor, Man } from '../patterns/visitor';
import { ButtonHandler, WindowHandler } from '../patterns/chain-of-responsibility';
import { RealSubject, SubjectProxy } from '../patterns/proxy';
import { curry } from './other/currying';
import {
	Component as CompositeComponent,
	Node as CompositeNode,
	Detail as CompositeDetail,
	Calculator as CompositeCalculator
} from '../patterns/composite';
import { Prototype } from '../patterns/prototype';
import {
	Abstraction,
	WindowsImplementor,
	Client as BridgeClient,
	LinuxImplementor,
	MacOSImplementor
} from '../patterns/bridge';
import { Flyweight, FlyWeightFactory } from '../patterns/flyweight';
import type { CharProps } from '../patterns/flyweight';

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
		icon: 'icon-park-outline:one'
	},
	factory: {
		id: 'factory',
		name: 'Factory',
		icon: 'material-symbols:factory-outline'
	},
	abstractFactory: {
		id: 'abstractFactory',
		name: 'Abstract Factory',
		icon: 'material-symbols:draw-abstract-outline'
	},
	builder: {
		id: 'builder',
		name: 'Builder',
		icon: 'fluent-mdl2:build-definition'
	},
	decorator: {
		id: 'decorator',
		name: 'Decorator',
		icon: 'material-symbols:layers-outline-rounded'
	},
	facade: {
		id: 'facade',
		name: 'Facade',
		icon: 'material-symbols:garage-home-outline'
	},
	mediator: {
		id: 'mediator',
		name: 'Mediator',
		icon: 'material-symbols:interactive-space-outline-sharp'
	},
	observable: {
		id: 'observable',
		name: 'Observable',
		icon: 'ph:binoculars'
	},
	visitor: {
		id: 'visitor',
		name: 'Visitor',
		icon: 'material-symbols:nest-doorbell-visitor-outline-rounded'
	},
	chainOfResponsibility: {
		id: 'chainOfResponsibility',
		name: 'Chain of Responsibility',
		icon: 'system-uicons:chain'
	},
	proxy: {
		id: 'proxy',
		name: 'Proxy',
		icon: 'eos-icons:proxy-outlined'
	},
	currying: {
		id: 'currying',
		name: 'Currying',
		icon: 'mdi:map-marker-path'
	},
	composite: {
		id: 'composite',
		name: 'Composite',
		icon: 'icomoon-free:tree'
	},
	prototype: {
		id: 'prototype',
		name: 'Prototype',
		icon: 'fe:prototype'
	},
	bridge: {
		id: 'bridge',
		name: 'Bridge',
		icon: 'mdi:bridge'
	},
	flyweight: {
		id: 'flyweight',
		name: 'Flyweight',
		icon: 'bi:feather'
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
		ctx.fillText(`Subscriber 1`, 30, 40);
		ctx.fillText(`${subscriber.state.timer}`, 30, 70);

		ctx.fillStyle = '#a8eb34';
		ctx.fillText(`Subscriber 2`, 200, 40);
		ctx.fillText(`${subscriber2.state.timer}`, 200, 70);
	};

	const interval = setInterval(() => draw(), 1000);

	return `
		${Publisher}
		${Subscriber}
	`;
};

const visitor = (ctx: CanvasRenderingContext2D) => {
	const Barbos = new Dog({ name: 'Barbos', state: 'Good boy' });
	const Sharik = new Dog({ name: 'Sharik', state: 'Bad boy' });
	const Murzik = new VisitorCat({ name: 'Murzik', furColor: 'black' });
	const Fluffy = new VisitorCat({ name: 'Fluffy', furColor: 'tabby' });
	const Rusik = new Man({ name: 'Rusik', gender: 'man' });
	const Nataha = new Man({ name: 'Nataha', gender: 'woman' });

	const animals = Array.from([Barbos, Sharik, Murzik, Fluffy, Rusik, Nataha]);
	console.log('animals', animals);

	ctx.font = '24px serif';
	ctx.fillStyle = '#fefefe';

	animals.forEach((animal, index) => {
		const visitorsReview = () => {
			const visitor = new Visitor();
			animal.accept(visitor);
			return visitor.getReview();
		};
		ctx.fillText(`${visitorsReview()}`, 30, 50 + 50 * index);
	});

	return `
		${Visitor}
	`;
};

const chainOfResponsibility = (ctx: CanvasRenderingContext2D) => {
	const button = new ButtonHandler();
	const window = new WindowHandler();

	button.setSuccessor(window);

	const canvas = document.getElementById('canvas');
	canvas.addEventListener('click', (e) => {
		const target = e.target as Element;
		const canvasRect = target.getBoundingClientRect();

		const clickCanvasX = e.pageX - canvasRect.left;
		const clickCanvasY = e.pageY - canvasRect.top;

		// Button click
		if (
			clickCanvasX >= 50 &&
			clickCanvasX <= 50 + 100 &&
			clickCanvasY >= 50 &&
			clickCanvasY <= 50 + 80
		) {
			const help = button.handle('button');
			console.log(help);
		} else {
			const help = button.handle('window');
			console.log(help);
		}
	});

	const draw = () => {
		ctx.clearRect(0, 0, 600, 600);
		ctx.font = '16px serif';

		// window
		ctx.fillStyle = '#cbcbcb';
		ctx.fillRect(10, 10, 300, 150);

		// button
		ctx.fillStyle = '#4aaff7';
		ctx.fillRect(50, 50, 100, 80);
		ctx.fillStyle = '#000';
		ctx.fillText('Button', 60, 70, 100);
	};

	draw();

	return `
		${ButtonHandler}
	`;
};

const proxy = (ctx: CanvasRenderingContext2D) => {
	const subject = new RealSubject();
	const userProxy = new SubjectProxy(subject, false);
	const adminProxy = new SubjectProxy(subject, true);

	ctx.font = '16px sans-serif';
	ctx.fillStyle = '#cbcbcb';

	// user doesn't have the access to send requests
	ctx.fillText('Users request being handled through proxy...', 50, 50);
	ctx.font = '16px monospace';
	ctx.fillText(`${userProxy.request()}`, 50, 80);

	// admin does
	ctx.font = '16px sans-serif';
	ctx.fillText('Admins request being handled through proxy...', 50, 150);
	ctx.font = '16px monospace';
	ctx.fillText(`${adminProxy.request()}`, 50, 180);

	return `
		${RealSubject}
		${SubjectProxy}
	`;
};

const currying = (ctx: CanvasRenderingContext2D) => {
	const uncurried = (a, b, c) => {
		return a + b + c;
	};

	const curried = curry(uncurried);

	const curriedOne = curried(10);
	const curriedTwo = curriedOne(20);
	const curriedThree = curriedTwo(30);

	ctx.font = '18px sans-serif';
	ctx.fillStyle = '#cbcbcb';

	ctx.fillText('Uncurried functions transformed into curried...', 50, 50);
	ctx.fillText(`Three arguments 10 + 20 + 30 in sum return: ${curriedThree} `, 50, 100);

	return `
		${curry}
	`;
};

const composite = (ctx: CanvasRenderingContext2D) => {
	const car = new CompositeNode();

	// Engine
	const engine = new CompositeNode();
	const engineCoffer = new CompositeDetail(200);
	const enginePistons = new CompositeDetail(400);
	const engineGears = new CompositeDetail(143);

	engine.add(engineCoffer);
	engine.add(enginePistons);
	engine.add(engineGears);

	car.add(engine);

	// Transmission
	const transmission = new CompositeNode();

	const gearBox = new CompositeNode();
	const gearboxGears = new CompositeDetail(100);
	const gearboxDetails = new CompositeDetail(222);
	gearBox.add(gearboxGears);
	gearBox.add(gearboxDetails);
	transmission.add(gearBox);

	const chasis = new CompositeNode();
	const chasisGears = new CompositeDetail(343);
	const chasisLevers = new CompositeDetail(332);
	chasis.add(chasisGears);
	chasis.add(chasisLevers);
	transmission.add(chasis);

	const transmissionGears = new CompositeDetail(500);
	transmission.add(transmissionGears);

	car.add(transmission);

	// Body
	const body = new CompositeNode();
	const bodyParts = new CompositeDetail(242);
	body.add(bodyParts);

	const cabin = new CompositeNode();
	const seats = new CompositeDetail(100);
	const furniture = new CompositeDetail(12);
	cabin.add(seats);
	cabin.add(furniture);
	body.add(cabin);

	car.add(body);

	// Wheels
	const wheels = new CompositeDetail(400);

	car.add(wheels);

	// Calculate prices
	const engineCalculator = CompositeCalculator(engine);
	const transmissionCalculator = CompositeCalculator(transmission);
	const bodyCalculator = CompositeCalculator(body);
	const wheelsCalculator = CompositeCalculator(wheels);
	const carCalculator = CompositeCalculator(car);

	ctx.font = '16px sans-serif';
	ctx.fillStyle = '#cbcbcb';
	ctx.fillText(`Engine price: ${engineCalculator}`, 50, 50);
	ctx.fillText(`Transmission price: ${transmissionCalculator}`, 50, 100);
	ctx.fillText(`Body price: ${bodyCalculator}`, 50, 150);
	ctx.fillText(`Wheels price: ${wheelsCalculator}`, 50, 200);
	ctx.fillRect(50, 220, 400, 3);
	ctx.fillText(`Total car price: ${carCalculator}`, 50, 270);

	return `
		${CompositeComponent}
		${CompositeNode}
		${CompositeDetail}
	`;
};

const prototype = (ctx: CanvasRenderingContext2D) => {
	const prototypes = [new Prototype()];
	const canvas = document.getElementById('canvas');

	const handleClone = () => {
		prototypes.push(prototypes[prototypes.length - 1].clone());
		draw();
	};

	const draw = () => {
		// Clone button
		ctx.font = '16px sans-serif';
		ctx.fillStyle = '#994a28';
		ctx.fillRect(50, 220, 200, 50);
		ctx.fillStyle = '#dcdcdc';
		ctx.fillText('Clone the last prototype', 55, 250, 390);

		// draw clone list
		prototypes.forEach((p, i) => {
			ctx.fillStyle = p.props.background;
			ctx.fillRect(50 + 50 * i, 50, p.props.width, p.props.height);
			ctx.fillStyle = p.props.color;
			ctx.fillText(p.content, 53 + 53 * i, 65);
		});
	};

	canvas.addEventListener('click', (e) => {
		const target = e.target as Element;
		const canvasRect = target.getBoundingClientRect();

		const clickCanvasX = e.pageX - canvasRect.left;
		const clickCanvasY = e.pageY - canvasRect.top;

		// Button 1 click
		if (
			clickCanvasX >= 50 &&
			clickCanvasX <= 50 + 200 &&
			clickCanvasY >= 220 &&
			clickCanvasY <= 50 + 220
		) {
			handleClone();
		}
	});

	draw();

	return `
		${Prototype}
	`;
};

const bridge = (ctx: CanvasRenderingContext2D) => {
	const linuxImplementation = new LinuxImplementor();
	const macImplementation = new MacOSImplementor();
	const windowsImplementation = new WindowsImplementor();
	const implementations = [linuxImplementation, macImplementation, windowsImplementation];
	let currentImplementationIndex = 0;

	const abstraction = new Abstraction(implementations[currentImplementationIndex]);
	const clientCode = new BridgeClient(abstraction);
	const canvas = document.getElementById('canvas');

	const changeImplementation = () => {
		currentImplementationIndex++;

		if (currentImplementationIndex > 2) {
			currentImplementationIndex = 0;
		}

		clientCode.changeImplementation(implementations[currentImplementationIndex]);
	};

	canvas.addEventListener('click', (e) => {
		const target = e.target as Element;
		const canvasRect = target.getBoundingClientRect();

		const clickCanvasX = e.pageX - canvasRect.left;
		const clickCanvasY = e.pageY - canvasRect.top;

		// Button click
		if (
			clickCanvasX >= 50 &&
			clickCanvasX <= 50 + 200 &&
			clickCanvasY >= 50 &&
			clickCanvasY <= 50 + 30
		) {
			changeImplementation();
			drawUI();
		}
	});

	const drawUI = () => {
		ctx.clearRect(0, 0, 600, 600);

		// Button
		ctx.fillStyle = '#fefefe';
		ctx.fillRect(50, 50, 200, 30);
		ctx.fillStyle = '#383838';
		ctx.font = '16px sans-serif';
		ctx.fillText('Change implementation', 70, 70, 150);
		clientCode.drawWindow(ctx);
	};

	drawUI();

	return `
		${Abstraction}
		${BridgeClient}
	`;
};

const flyweight = (ctx: CanvasRenderingContext2D) => {
	const canvas = document.getElementById('canvas');

	let isBold = false;
	let isItalic = false;
	const line = 1;

	const letters: Flyweight[] = [];

	const factory = new FlyWeightFactory([]);

	const getCharProps = (char: string): CharProps => {
		return {
			char,
			state: {
				...(isBold && { bold: true }),
				...(isItalic && { italic: true })
			}
		};
	};

	const draw = () => {
		ctx.clearRect(0, 0, 600, 600);
		// Bold Button
		ctx.fillStyle = '#fefefe';
		ctx.fillRect(50, 50, 50, 50);
		ctx.fillStyle = '#353535';
		ctx.font = `${isBold ? 'bold ' : ''}28px sans-serif`;
		ctx.fillText('B', 65, 85, 50);

		// Italic Button
		ctx.fillStyle = '#fefefe';
		ctx.fillRect(110, 50, 50, 50);
		ctx.fillStyle = '#353535';
		ctx.font = `${isItalic ? 'bold ' : ''}28px sans-serif`;
		ctx.fillText('I', 130, 85, 50);

		// Text
		ctx.fillStyle = '#fefefe';
		ctx.font = `${isBold && 'bold '}26px sans-serif`;
		ctx.textBaseline = 'alphabetic';

		letters.forEach((l, i) => {
			ctx.fillText(l.processChar(ctx), 20 + 20 * i, 150 + line * 30);
		});
	};

	canvas.addEventListener('click', (e) => {
		const target = e.target as Element;
		const canvasRect = target.getBoundingClientRect();

		const clickCanvasX = e.pageX - canvasRect.left;
		const clickCanvasY = e.pageY - canvasRect.top;

		// Bold btn click
		if (
			clickCanvasX >= 50 &&
			clickCanvasX <= 50 + 50 &&
			clickCanvasY >= 50 &&
			clickCanvasY <= 50 + 50
		) {
			isBold = !isBold;
			draw();
		}

		// Italic btn click
		if (
			clickCanvasX >= 110 &&
			clickCanvasX <= 110 + 50 &&
			clickCanvasY >= 50 &&
			clickCanvasY <= 50 + 50
		) {
			isItalic = !isItalic;
			draw();
		}
	});

	document?.addEventListener('keydown', (e) => {
		switch (e.key) {
			case 'Backspace':
				letters.pop();
				break;
			case 'Enter':
				break;
			default:
				letters.push(factory.getFlyWeight(getCharProps(e.key)));
				factory.listFlyWeights();
		}

		draw();
	});

	draw();

	return `${Flyweight}`;
};

export const canvasRenderCollection: ICanvasRenderCollection = {
	singleton,
	factory,
	abstractFactory,
	builder,
	decorator,
	facade,
	mediator,
	observable,
	visitor,
	chainOfResponsibility,
	proxy,
	currying,
	composite,
	prototype,
	bridge,
	flyweight
};
