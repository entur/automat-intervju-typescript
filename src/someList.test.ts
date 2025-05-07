import { SomeList } from "./someList";

describe("someList", () => {
  test("holds the list passed to it", () => {
    const strings = ["apple", "banana", "cherry"];
    const list = new SomeList(strings);
    expect(list.getStrings()).toEqual(strings);
  });
});
