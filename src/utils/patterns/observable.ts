
export class Publisher {
    public state = {timer: 0}

    public subscribers: any[] = [];

    public subscribe(subscriber: any) {
        this.subscribers.push(subscriber)
    }

    public unsubscribe(subscriber: any) {
        const indexOfSub = this.subscribers.findIndex((s) => s === subscriber);
        if (indexOfSub) {
            this.subscribers.splice(indexOfSub, 1)    
        }
    }

    public notify() {
        this.subscribers.forEach((subscriber) => subscriber.notify(this.state))
    }

    public init() {
        const interval = setInterval(() => {
            this.state.timer += 1;
            console.log('change: ', this.state.timer)
            this.notify();
        }, 1000)
    }

}

export class Subscriber {
    public state = {timer: 0};

    public getState() {
        return this.state;
    }

    public subscribe(publisher: Publisher) {
        publisher.subscribe(this)
    }
    public notify(change: any) {
        this.state = change;
    }
}