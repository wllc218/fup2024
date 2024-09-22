let _cin_: string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch (e) { }
let input = (): string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end: string = "\n") => process.stdout.write("" + text + end);
export { };

let capa = +input(),
    alu = +input(),
    idas = 0;
    capa -= 1;

if (capa > alu) {
    write(1);
} else {
    while (alu > capa) {
        alu -= idas;
        alu -= capa - idas;
        idas++
    }
    write(idas + 1)
}