import { writer } from "repl";

let _cin_: string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch (e) { }
let input = (): string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end: string = "\n") => process.stdout.write("" + text + end);
export { };


let x = +input(),
    y = +input(),
    z = +input(),
    a = +input(),
    l = +input();

if ((x + y) <= (a + l)) {
    write("S");
} else if (y > a && z < a) {
    write("S");
} else {
    write("N");
}