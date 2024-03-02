
export class Abstraction {
    implementor: Implementor;

    constructor(implementor: Implementor) {
        this.implementor = implementor;
    }

    public drawWindow(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(this.implementor.getWindow(), 100, 100);
    }
}

export interface Implementor {
    getWindow: () => CanvasImageSource;
}

export class WindowsImplementor implements Implementor {
    private img = new Image();

    constructor() {
       this.img.src = '../../src/lib/assets/images/bridge/windows.png';
    }


   public getWindow() {
      return this.img;
   }
}

export class MacOSImplementor implements Implementor {
    img = new Image();

    constructor() {
        this.img.src = '../../src/lib/assets/images/bridge/macOS.png';
    }


    public getWindow() {
        return this.img;
    }
}

export class LinuxImplementor implements Implementor {
    img = new Image();

    constructor() {
        this.img.src = '../../src/lib/assets/images/bridge/linux.jpg';
    }


    public getWindow() {
        return this.img;
    }
}

export class Client {
    abstraction: Abstraction;

    constructor(abstraction: Abstraction) {
        this.abstraction = abstraction
    }

    public changeImplementation(implementation: Implementor) {
        this.abstraction.implementor = implementation;
    }

    public drawWindow(ctx: CanvasRenderingContext2D){
        this.abstraction.drawWindow(ctx);
    }
}