interface IMediator {
	onChange(sender: object, event: string);
}

export class Mediator implements IMediator {
	private component1: Button;
	private component2: Button;

	constructor(c1: Button, c2: Button) {
		this.component1 = c1;
		this.component1.setMediator(this);
		this.component2 = c2;
		this.component2.setMediator(this);
	}

	onChange(sender: object, event: string) {
		if (event === 'valueChange') {
			if (sender === this.component1) {
				this.component2.value += 1;
			}
			if (sender === this.component2) {
				this.component1.value += 1;
			}
		}
	}
}

class ButtonBase {
	protected mediator: Mediator;
	public value;
	constructor(mediator?: Mediator) {
		this.mediator = mediator;
		this.value = 0;
	}

	public setMediator(mediator: Mediator) {
		this.mediator = mediator;
	}
}

export class Button extends ButtonBase {
	public value;
	constructor(value) {
		super(value);
		this.value = value;
	}

	public onChange() {
		this.mediator.onChange(this, 'valueChange');
	}
}
