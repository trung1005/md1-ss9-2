let a = Number(prompt("nhập vào 1 số"))
let b = Math.floor(a/100);
let c = Math.floor( (a%100)/10)
let d = a % 10


document.write("số đảo ngược:"+d+c+b )