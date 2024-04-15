export class Singleton {
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
