let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="")=> process.stdout.write("" + text + end);
export {};


let num = +input();

write("[ ");
for(let i = 0; i <= 9; i++) {
    if(i == num) {
        write("");
    } else if (i != num) {
        write(i + " ");
    }
}

if (num != 10) {
    write("ceu ");
}
write("]\n");




