let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function idade(id) {
    if (id < 12) {
      return "crianca";
    }
    if (id < 18) {
      return "jovem";
    }
    if (id < 65) {
      return "adulto";
    }
    if (id < 1000) {
      return "idoso";
    }
    return "mumia";
  }
  
  let nome = input();
  let anos = +input();
  
  console.log(`${nome} eh ${idade(anos)}`);