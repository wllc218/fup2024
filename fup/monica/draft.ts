let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

function idade(monica: number, son1: number, son2: number) {
    let son3: number = ((son1 + son2) - monica) * -1;
    if (son1 > son2 && son1 > son3) {
      return son1;
    }
    if (son2 > son1 && son2 > son3) {
      return son2;
    }
    return son3;
}

let m = +input(),
    f1 = +input(),
    f2 = +input();

write(idade(m, f1, f2));