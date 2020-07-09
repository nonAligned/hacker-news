export class User {
    id: string;
    delay: number;
    created: number;
    karma: number;
    about: string;
    submitted: number[];

    constructor(obj?: any) {
        this.id = obj && obj.id || null;
        this.delay = obj && obj.delay || null;
        this.created = obj && obj.created || null;
        this.karma = obj && obj.karma || null;
        this.about = obj && obj.about || null;
        this.submitted = obj && obj.submitted || [];
    }
}