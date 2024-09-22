let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="")=> process.stdout.write("" + text + end);
export {};

let txt: String[] = input().split(""),
    ind = +input(),
    qtd = +input(),
    txt1 = txt.length;
    
for (let i = ind; i <= qtd; i++) {
    if (i <= txt1) {
        write(txt[i]);
    } else {
        break;
    }
}

write("\n")