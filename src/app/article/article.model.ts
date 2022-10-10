export default class Article {
  constructor(
    public title: string,
    public link: string,
    public votes: number = 0
  ) {}
  voteUp(): void {
    this.votes++;
  }
  voteDown(): void {
    this.votes--;
  }
  domen(): string {
    try {
      const domainAndPath: string = this.link.split('//')[1];
      return domainAndPath.split('/')[0];
    } catch (err) {
      return '';
    }
  }
}
