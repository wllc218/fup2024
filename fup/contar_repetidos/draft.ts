let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let [n1, n2]: number[] = input().split(" ").map(Number),
    rep = 0;

for (let i = 0; i < n2; i++) {
    let num = +input();
    if (num == n1) {
        rep++;
    }
}

write(rep);


