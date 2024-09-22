let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let prof: number = +input(),
    salto: number = +input(),
    slide: number = +input(),
    sapo: number = 0;

while(salto <= prof) {
    let sair: string = sapo + " ";
    sapo += salto;

    if (sapo >= prof) {
        sair += "saiu";
        write(sair);
        break;
    } else {
        sair += sapo;
        write(sair);
        sapo -= slide;
    }
}