interface Command {
	execute(): string;
}

export class SaveCommand implements Command {
	private receiver: Receiver;

	constructor(receiver: Receiver) {
		this.receiver = receiver;
	}

	public execute() {
		return this.receiver.saveFile('index.ts', '/folder/subfolder');
	}
}

export class SuccessAlertCommand implements Command {
	private message: string;

	constructor(message: string) {
		this.message = message;
	}

	public execute() {
		return this.message;
	}
}

export class Receiver {
	public saveFile(fileName: string, filePath: string) {
		return `saving file '${fileName}' at '${filePath}'...`;
	}
}

export class Invoker {
	private onStart: Command;
	private onFinish: Command;
	private results: { start: string | null; finish: string | null } = { start: null, finish: null };

	public setOnStart(command: Command) {
		this.onStart = command;
	}

	public setOnFinish(command: Command) {
		this.onFinish = command;
	}

	public saveFile() {
		if (this.isCommand(this.onStart)) {
			this.results.start = this.onStart.execute();
		}

		if (this.isCommand(this.onFinish)) {
			this.results.finish = this.onFinish.execute();
		}

		return this.results;
	}

	private isCommand(object: Command | undefined) {
		return !!object?.execute;
	}
}
