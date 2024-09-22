elet _cin_: string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch (e) { }
let input = (): string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end: string = "\n") => process.stdout.write("" + text + end);
export { };


let size = +input(),
    x = +input(),
    y = +input(),
    dire = input(),
    //u = up, d = down, l = left, r = right
    segs = +input();

    