export class Prototype {
    public props = { width: 100, height: 60, background: '#dedede', color: '#252525', font: '16px sans-serif' };
    public content = 'I am Prototype';

    public clone(): this {
        return Object.create(this);
    }
}