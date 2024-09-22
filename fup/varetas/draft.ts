let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let l1 = +input(),
    l2 = +input(),
    l3 = +input();
    
if (l3 >= (l1 + l2) || l1 >= (l2 + l3) || l2 >= (l1 + l3)) {
    write("False");
} else {
    write("True");
}