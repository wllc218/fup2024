let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function mame(n1, n2) {
    if (n1 > n2) {
        return n1;
    }
    return n2;

}

let a = +input(),
    b = +input();

write(mame(a, b));