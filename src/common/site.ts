import { CrudStamp } from './revision/crud_stamp';
import StampedObject from './revision/stamped_object';

export class Site implements StampedObject {
    url: string;
    name?: string;

    constructor(url: string) {
        this.url = url;
    }

    d: CrudStamp = new CrudStamp();

    isSameItem(site: Site) {
        return (this.d.i === site.d.i)
            && (this.d.c === site.d.c);
    }

    get key(): string {
        return Site.KeyFromCrud(this.d);
    }

    static KeyFromCrud(stamp: CrudStamp) { return `${stamp.i} ${stamp.c}`; }

    static FromObject(site: object) {
        if (site instanceof Site) { return site; }

        var newSite = Object.assign(new Site(''), site);
        newSite.d = Object.assign(newSite.d, (<any>site).d);

        CrudStamp._i -= 1; // TODO: remove

        return newSite;
    }

    toObject() {
        return Object.assign({}, this);
    }
}