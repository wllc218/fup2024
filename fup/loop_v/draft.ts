let _cin_: string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch (e) { }
let input = (): string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end: string = "") => process.stdout.write("" + text + end);
export { };

let num = input().split(" "),
    n1 = +num[0],
    n2 = +num[1];
write("[");

for (let i = n1; i <= n2; i++) {
    if (i % 2 != 0) {
        write(" " + i);
    }
}

write(" ]\n");