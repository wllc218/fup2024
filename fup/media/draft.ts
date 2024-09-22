let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function calcular(n1, n2) {
    return ((n1 + n2) / 2).toFixed(1);
  }
  
  let num1 = +input(),
      num2 = +input();
  
  console.log(calcular(num1, num2));
