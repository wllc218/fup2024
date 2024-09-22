let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="")=> process.stdout.write("" + text + end);
export {};

let word: String[] = input().split("");

for(let i = (word.length - 1); i >= 0; i--) {
    write(word[i]);
}

write("\n");