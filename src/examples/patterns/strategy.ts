export interface Strategy {
	doAlgorithm(data: string[]): string[];
}

export class Context {
	private strategy: Strategy;

	constructor(strategy: Strategy) {
		this.strategy = strategy;
	}

	public setStrategy(strategy: Strategy) {
		this.strategy = strategy;
	}

	public doLogic() {
		return this.strategy.doAlgorithm(['a', 'f', 'g', 'b', 'c', 'd', 'e']);
	}
}

export class ConcreteSortStrategy implements Strategy {
	public doAlgorithm(data: string[]): string[] {
		return data.sort();
	}
}

export class ConcreteReverseStrategy implements Strategy {
	public doAlgorithm(data: string[]): string[] {
		return data.reverse();
	}
}
