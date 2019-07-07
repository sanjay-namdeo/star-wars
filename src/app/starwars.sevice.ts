export class StarWarService {
  characters = [
    { name: 'Spiderman', side: 'light' },
    { name: 'Batman', side: 'dark' },
    { name: 'Shazam', side: '' }
  ];

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
  }
}
