let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

//hfpd
let [h, f, p, d]: number[] = input().split(" ").map(Number);

while(true) {
    if (f == h) {
        write("S");
    } else if (f == p) {
        write("N");
    } if (d == -1) {
        f--
        if (f < 0) {
            f = 15;
        }
    } else {
        f++
        if (f > 15) {
            f = 0;
        }
    }
}