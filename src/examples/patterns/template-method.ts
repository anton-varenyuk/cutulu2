export class Store {
	// Template method defining the algorithm
	announce() {
		return `${this.step1()} ${this.doStep2()} ${this.step3()}`;
	}

	step1() {
		return 'This is ';
	}

	step3() {
		return ', one of the items of our store';
	}

	doStep2() {
		throw new Error('doStep2 must be implemented by subclasses.');
	}
}

export class CarStore extends Store {
	// Override the step2 method
	doStep2() {
		return 'the Car';
	}
}

export class MotoStore extends Store {
	// Override the step2 method
	doStep2() {
		return 'the Motorcycle';
	}
}

// Client code
export function client(store: Store) {
	return store.announce();
}
