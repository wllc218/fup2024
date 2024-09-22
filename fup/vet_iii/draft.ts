let _cin_: string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch (e) { }
let input = (): string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end: string = "") => process.stdout.write("" + text + end);
export { };

let num = +input();
let vet: number[] = input().split(" ").map(Number);

write("[");
for (let i = 0; i < num; i++) {
    if (vet[i] != 0 && vet[i] != num && num != 1) {
        write(vet[i] + ", ");
    } else {
        write(vet[i]);
    }
}
write("]\n");
