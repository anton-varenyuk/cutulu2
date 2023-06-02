interface IFactory {
	createProduct(): IProduct;
}

interface IProduct {
	name: string;
	say(): string;
}

interface ISubProduct {
	size: number;
}

// Abstract

export abstract class AbstractFactory implements IFactory {
	public abstract createProduct(): IProduct;
	public abstract createSubProduct(): ISubProduct;
}

abstract class SubProduct implements ISubProduct {
	size: number;
}

abstract class Product implements IProduct {
	name: string;

	constructor(name: string) {
		this.name = name;
	}

	public abstract say(): string;
}

// Concrete products

export class Cat extends Product {
	name;
	constructor(name) {
		super(name);
		this.name = name;
	}
	public say() {
		return `${this.name} says 'Meow!'`;
	}
}

class Kitten extends SubProduct {
	size = 20;
}

class Dog extends Product {
	name;
	constructor(name) {
		super(name);
		this.name = name;
	}
	public say() {
		return `${this.name} says 'Woof!'`;
	}
}

class Puppy extends SubProduct {
	size = 35;
}

// Concrete factories

export class CatFactory implements AbstractFactory {
	public createProduct(): IProduct {
		return new Cat('Cat');
	}
	public createSubProduct(): ISubProduct {
		return new Kitten();
	}
}

export class DogFactory implements AbstractFactory {
	public createProduct(): IProduct {
		return new Dog('Dog');
	}
	public createSubProduct(): ISubProduct {
		return new Puppy();
	}
}

// Client

export function client(factory: AbstractFactory) {
	const product = factory.createProduct();
	const subProduct = factory.createSubProduct();

	return { product, subProduct };
}
