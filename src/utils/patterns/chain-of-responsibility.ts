interface IHandler {
	setSuccessor(handler: IHandler): IHandler;
	handle(request: string): string;
}

export class AbstractHandler implements IHandler {
	private successor: IHandler;

	public setSuccessor(handler: IHandler): IHandler {
		this.successor = handler;
		return handler;
	}

	public handle(request: string): string {
		if (this.successor) {
			return this.successor.handle(request);
		}

		return 'this is an element';
	}
}

export class ButtonHandler extends AbstractHandler {
	public handle(request): string {
		if (request === 'button') {
			return 'This is button, you can click on it!';
		}
		return super.handle(request);
	}
}

export class WindowHandler extends AbstractHandler {
	public handle(request): string {
		if (request === 'window') {
			return 'This is a window element. It can contain something.';
		}
		return super.handle(request);
	}
}
