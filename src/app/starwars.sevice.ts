import { Subject } from 'rxjs';

export class StarWarService {
  private characters = [
    { name: 'Spiderman', side: 'light' },
    { name: 'Batman', side: 'dark' },
    { name: 'Shazam', side: '' }
  ];
  public changeSideObserver = new Subject<void>();

  getCharacters(side: string) {
    if (side === 'all') {
      return this.characters.slice();
    } else if (side === 'light') {
      return this.characters.filter((char) => char.side === 'light').slice();
    } else if (side === 'dark') {
      return this.characters.filter((char) => char.side === 'dark').slice();
    }
    return [];
  }

  changeSide(char) {
    const pos = this.characters.findIndex((c) => c.name === char.name);
    this.characters[pos].side = char.side;
    this.changeSideObserver.next();
  }

  addCharacter(char) {
    if (char.name === '') {
      return;
    }
    this.characters.filter((c) => {
      if (c.name === char.name) {
        return;
      }
    });
    this.characters.push(char);
  }
}
