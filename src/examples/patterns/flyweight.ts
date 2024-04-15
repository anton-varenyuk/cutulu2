interface CharExtrinsicState {
    bold?: boolean;
    italic?: boolean;
}

export interface CharProps {
    char: string;
    state: CharExtrinsicState;
}

export class Flyweight {
    private ext: CharProps; // Shared state

    constructor(ext: CharProps) {
        this.ext = ext;
    }

    public processChar(ctx: CanvasRenderingContext2D) {
        ctx.font = `${this.ext.state.italic ? 'italic ' : ''}${this.ext.state.bold ? 'bold ' : ''}26px sans-serif`;
        return this.ext.char;
    }
}

export class FlyWeightFactory {
    private flyweights: {[key: string]: Flyweight} = {};

    constructor(initialFlyWeights: CharProps[]) {
        for (const char of initialFlyWeights) {
            this.flyweights[this.getKey(char)] = new Flyweight(char);
        }
    }

    private getKey(props: CharProps): string {
        let key = props.char;
        if (Object.keys(props.state).length) {
            key += `_${Object.keys(props.state).join('_')}`
        }
        return key;
    }

    public getFlyWeight(char: CharProps): Flyweight {
        const key = this.getKey(char);

        if (!this.flyweights[key]) {
            this.flyweights[key] = new Flyweight(char);
        }

        return this.flyweights[key]
    }

    public listFlyWeights(): void {
        console.log('flyWeight: ', this.flyweights);
    }
}