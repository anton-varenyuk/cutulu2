interface IBuilder {
	addPart(type: string, number: number): void;
}

interface IPart {
	type: string;
	number: number;
}

export const abom1 = [
	{ type: 'arms', number: 4 },
	{ type: 'legs', number: 3 },
	{ type: 'heads', number: 2 }
];

export const abom2 = [
	{ type: 'tails', number: 9 },
	{ type: 'maws', number: 23 },
	{ type: 'heads', number: 11 }
];

export class AbominationBuilder implements IBuilder {
	private product: Abomination = { parts: [] };

	public addPart(type: string, number: number) {
		this.product.parts.push({ type, number });
	}

	public reset(): void {
		this.product = new Abomination();
	}

	public getProduct(): Abomination {
		const result = this.product;
		this.reset();
		return result;
	}
}

class Abomination {
	public parts: IPart[] = [];
}

export class Director {
	private builder: IBuilder;
	private buildParams: IPart[];

	constructor(buildParams: IPart[]) {
		this.buildParams = buildParams;
	}

	public setBuilder(builder: IBuilder): void {
		this.builder = builder;
	}

	public buildProduct(): void {
		console.log('build params: ', this.buildParams);
		if (this.buildParams) {
			this.buildParams.forEach((param) => this.builder.addPart(param.type, param.number));
		}
	}
}

export const client = (director: Director) => {
	const builder = new AbominationBuilder();

	director.setBuilder(builder);
	director.buildProduct();

	return builder.getProduct();
};
