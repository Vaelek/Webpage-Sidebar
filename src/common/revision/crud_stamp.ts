
export class CrudStamp {
    /** created (acts as member of id. don't modify after creation) */
    c: string;
    u?: string;
    d?: string;
    /** construction index to resolve simultaneously constructed items */
    i: number;

    static _i: number;

    constructor() {
        this.c = new Date().toISOString();
        this.u = this.c;
        this.d = undefined;
        this.i = ++CrudStamp._i;
    }
}