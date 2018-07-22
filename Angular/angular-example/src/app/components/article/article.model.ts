export class Article {
    title: string;
    link: string;
    votes: number;
    constructor(title: string, link: string, votes?: number, ) {
        this.votes = votes || 0;
        this.title = title;
        this.link = link;
    }
    voteUp(): void {
        this.votes++;
    }
    voteDown(): void {
        this.votes--;
    }
    domain(): string {
        try {
            const link: string = this.link.split('//')[1];
            return link.split('/')[0];
        } catch (e) {
            return null;
        }
    }
}