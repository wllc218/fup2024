let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function arredonda(a, b) {
    if (a == "r") {
        return Math.round(b);
    }
    if (a == "f") {
        return Math.floor(b);
    }
    if (a == "c") {
        return Math.ceil(b);
    }
}

let tipo = input(),
    num = +input();

write(arredonda(tipo, num));