let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function goiaba(capacidade, bana, goia, manga) {
    let total = bana + goia + manga;
    return Math.ceil(total / capacidade);
}

let c = +input(),
    f1 = +input(),
    f2 = +input(),
    f3 = +input();
    
console.log(goiaba(c, f1, f2, f3));
