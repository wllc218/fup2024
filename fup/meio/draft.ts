let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


function meio(a, b, c) {
    if (a > b && a < c || a > c && a < b) {
        return a; 
    } 
    if (b > a && b < c || b > c && b < a) {
        return b;
    }
    return c;
}   

let n1 = +input(),
    n2 = +input(),
    n3 = +input();

write(meio(n1, n2,n3));