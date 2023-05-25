interface IDude {
	name: string;
	say(): string;
}

export abstract class Creator {
	public abstract dudeFactory(name?: string): IDude;

	public run(): string {
		const dude = this.dudeFactory();
		return `Dude ${dude.name} says: ${dude.say()}`;
	}
}

export class DudeCreator1 extends Creator {
	public dudeFactory(): IDude {
		return new Dude1();
	}
}

export class Dude1 implements IDude {
	public name = 'Vasa';
	public say(): string {
		return 'Hi all!';
	}
}

export class DudeCreator2 extends Creator {
	public dudeFactory(): IDude {
		return new Dude2();
	}
}

export class Dude2 implements IDude {
	public name = 'Jin Yan';
	public say(): string {
		return 'Ni hao!';
	}
}

export const client = (creator: Creator) => {
	return creator.run();
};
