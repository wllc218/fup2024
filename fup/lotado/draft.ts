
let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let c: number = +input(),
    estado: number = 0,
    vet: number[] = [];

while(true) {
    let mov: number = +input();
    estado += mov;

    if (estado == 0) {
        write("vazio");
    } else if (estado > 0 && estado < c) {
        write("ainda cabe");
    } else if (estado >= c && estado < c * 2) {
        write("lotado");
    } else if (estado >= c * 2) {
        write("hora de partir");
        break;
    }
}