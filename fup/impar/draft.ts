let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function parouimpar(pessoa, ded1, ded2) {
    if (pessoa == 1) {
      if ((ded1 + ded2) % 2 == 0) {
        return "1";
      }
        return "0";
    }
    if (pessoa == 0) {
      if ((ded1 + ded2) % 2 == 0) {
        return "0";
      }
        return "1";
    }
  }
  
  let a = +input(),
      b = +input(),
      c = +input();
  
  write(parouimpar(a, b, c));