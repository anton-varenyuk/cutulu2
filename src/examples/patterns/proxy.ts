interface ISubject {
	request(): void;
}

export class RealSubject implements ISubject {
	public request(): string {
		return 'Access permitted!';
	}
}

export class SubjectProxy implements ISubject {
	private realSubject: RealSubject;
	private isAdmin: boolean;

	constructor(realSubject: RealSubject, isAdmin?: boolean) {
		this.realSubject = realSubject;
		this.isAdmin = isAdmin;
	}

	public request() {
		if (this.hasAccess()) {
			return this.realSubject.request();
		} else {
			return 'Access denied!';
		}
	}

	private hasAccess(): boolean {
		return this.isAdmin;
	}
}
