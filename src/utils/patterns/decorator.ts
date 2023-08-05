interface IComponent {
	say: () => string;
}

export class DeveloperComponent implements IComponent {
	public say(): string {
		return 'developer';
	}
}

export class Decorator implements DeveloperComponent {
	protected component: IComponent;

	constructor(component: IComponent) {
		this.component = component;
	}

	public say(): string {
		return this.component.say();
	}
}

class JuniorDecorator extends Decorator {
	public say(): string {
		return `junior ${super.say()}`;
	}
}

class SeniorDecorator extends Decorator {
	public say(): string {
		return `senior ${super.say()}`;
	}
}

class FullstackDecorator extends Decorator {
	public say(): string {
		return `fullstack ${super.say()}`;
	}
}

export const dev = new DeveloperComponent();
export const juniorDev = new JuniorDecorator(dev);
export const juniorSeniorDev = new SeniorDecorator(juniorDev);
export const juniorSeniorFullstackDev = new FullstackDecorator(juniorSeniorDev);

export const client = (component: IComponent): string => {
	return `I am ${component.say()}`;
};
