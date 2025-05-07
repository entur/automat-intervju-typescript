import { stdin, stdout } from "node:process";
import * as readline from "node:readline/promises"; // This uses the promise-based APIs
import { SomeList } from "./someList";

const rl = readline.createInterface({ input: stdin, output: stdout });

async function collectStrings() {
  const strings: string[] = [];
  let inputString = "";
  while (true) {
    inputString = await rl.question(
      "Enter a string (or press enter to finish): ",
    );
    if (inputString === "") {
      break;
    }
    strings.push(inputString);
  }
  return strings;
}

collectStrings()
  .then((strings) => {
    const list = new SomeList(strings);
    console.log("You entered:", list.getStrings());
  })
  .then(() => {
    rl.close();
  })
  .catch((err) => {
    console.error(err);
    rl.close();
    process.exit(1);
  });
