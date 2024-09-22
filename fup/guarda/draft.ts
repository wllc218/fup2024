let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function status(wifi, login, admin) {
    if (wifi == 0) {
      return "you must connect to wifi";
    }
    if (login == 0) {
      return "you need to login first";
    }
    if (admin == 0) {
      return "you must to login as admin";
    }
    return "done";
  }
  
  let a = input(),
      b = input(),
      c = input();
  
  write(status(a, b, c));