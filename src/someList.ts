export class SomeList {
  _strings: string[];

  constructor(strings: string[]) {
    this._strings = strings;
  }

  getStrings() {
    return this._strings;
  }
}
