let _cin_: string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch (e) { }
let input = (): string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end: string = "\n") => process.stdout.write("" + text + end);
export { };

let a: number = +input(),
    b: number = +input(),
    soma = 0;

for (let i = a; i <= b; i++) {
    if (i % 2 == 0 && i % 3 == 0) {
        soma += i;
    }
}

if (soma == 0) {
    write("invalido");
} else {
    write(soma);
}