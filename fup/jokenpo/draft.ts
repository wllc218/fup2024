let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function jokenpo(jog1, jog2) {
    if (jog1 == jog2) {
      return "empate";
    }
    if (jog1 == "R" && jog2 == "S" || jog1 == "S" && jog2 == "P" || jog1 == "P" && jog2 == "R") {
      return "jog1";
    } else {
      return "jog2";
    }
  }
  
  let um = input(),
      dois = input();
  
  write(jokenpo(um, dois));