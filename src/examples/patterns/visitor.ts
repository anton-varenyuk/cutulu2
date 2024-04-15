interface IAnimalVisitor {
	visitDog(d: Dog);
	visitCat(c: Cat);
	visitMan(m: Man);
}

interface IElement {
	accept(visitor: Visitor);
}

export class Visitor implements IAnimalVisitor {
	public review = '';

	public visitDog(d: Dog) {
		this.review = `Dog's name is ${d.name}. He is a ${d.state}`;
	}
	public visitCat(c: Cat) {
		this.review = `This is ${c.name}. It is a ${c.furColor} cat`;
	}
	public visitMan(m: Man) {
		this.review = `This is a ${m.gender} named ${m.name}`;
	}

	public getReview(): string {
		return this.review;
	}
}

export class Dog implements IElement {
	public name;
	public state;

	constructor(props: { name: string; state: string }) {
		this.name = props.name;
		this.state = props.state;
	}

	public accept(visitor: Visitor) {
		visitor.visitDog(this);
	}
}

export class Cat implements IElement {
	public name;
	public furColor;

	constructor(props: { name: string; furColor: string }) {
		this.name = props.name;
		this.furColor = props.furColor;
	}

	accept(visitor: Visitor) {
		visitor.visitCat(this);
	}
}

export class Man implements IElement {
	public name;
	public gender;

	constructor(props: { name: string; gender: string }) {
		this.name = props.name;
		this.gender = props.gender;
	}

	accept(visitor: Visitor) {
		visitor.visitMan(this);
	}
}
