let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="")=> process.stdout.write("" + text + end);
export {};

let num = +input(),
    vet: number[] = input().split(" ").map(Number);

write("[");
for(let i = 0; i <= num; i++) {
    if (vet[i] == 1) {
        write("A");
    } else if (vet[i] > 1 && vet[i] <= 10) {
        write(vet[i]);
    } else if (vet[i] == 11) {
        write("J");
    } else if (vet[i] == 12) {
        write("Q");
    } else if (vet[i] == 13){
        write("K");
    } else {
        write("");
    }

    if(vet[i] == 0 || i >= num - 1) {
        write("");
    } else {
        write(", ");
    }
}
write("]\n");