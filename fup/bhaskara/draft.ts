let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let n1 = +input(),
    n2 = +input(),
    n3 = +input(),
    delta = n2 * n2 - 4 * n1 * n3,
    res = ((-n2 + Math.sqrt(delta)) / (2 * n1)).toFixed(2),
    resm = ((-n2 - Math.sqrt(delta)) / (2 * n1)).toFixed(2);

    if (delta > 0) {
        console.log(res);
        console.log(resm);
    } else if (delta == 0) {
        console.log(res);
    } else {
        console.log("nao ha raiz real")
    }