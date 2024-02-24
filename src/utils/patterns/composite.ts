export abstract class Component {
    public add(component: Component): void {};
    public remove(component: Component): void {};


    public abstract calculatePrice(): number;
}

export class Detail extends Component {
    private price: number;

    constructor(price: number) {
        super();
        this.price = price;
    }

    public calculatePrice(): number {
        return this.price;
    }
}

export class Node extends Component {
    protected children: Component[] = [];

    public add(component: Component) {
        this.children.push(component);
    }

    public remove(component: Component) {
        const componentIndex = this.children.indexOf(component);
        this.children.splice(componentIndex, 1);
    }

    public calculatePrice(): number {
        let result = 0;
        for (const detail of this.children) {
            result += detail.calculatePrice();
        }
        return result;
    }
}

export function Calculator(component: Component) {
    return component.calculatePrice();
}