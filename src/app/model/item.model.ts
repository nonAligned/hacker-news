export class Item {
    id: number;
    deleted: boolean;
    type: string;
    by: string;
    time: number;
    text: string;
    dead: boolean;
    parent: number;
    poll: number;
    kids: number[];
    url: string;
    score: number;
    title: string;
    parts: number[];
    descendants: number;

    constructor(obj?: any) {
        this.id = obj && obj.id || null;
        this.deleted = obj && obj.deleted || null;
        this.type = obj && obj.type || "";
        this.by = obj && obj.by || "";
        this.time = obj && obj.time || null;
        this.text = obj && obj.text || "";
        this.dead = obj && obj.dead || null;
        this.parent = obj && obj.parent || null;
        this.poll = obj && obj.poll || null;
        this.kids = obj && obj.kids || [];
        this.url = obj && obj.url || "";
        this.score = obj && obj.score || 0;
        this.title = obj && obj.title || "";
        this.parts = obj && obj.parts || [];
        this.descendants = obj && obj.descendants || null;
    }
}