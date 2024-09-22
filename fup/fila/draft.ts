let _cin_: string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch (e) { }
let input = (): string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end: string = "") => process.stdout.write("" + text + end);
export { };

let pessoas = +input(),
    num: number[] = input().split(" ").map(Number);

write("[ ")
for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 != 0) {
        write(num[i] + " ");
    }

}
write("]");

write("\n[ ");

for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 == 0) {
        write(num[i] + " ");
    }
}

write("]\n");