let a = "Please locate where 'locate' occurs!";
let position = a.search("locate");
console.log(position);

let b = "Apple, Banana, Kiwi";
let ans = b.slice(7,13);
console.ans(res);

let c = "Apple, Banana, Kiwi";
let ans = c.slice(-12, -6);
console.ans(res);

let d = "Apple, Banana, Kiwi";
let ans = d.substring(7, 13);
console.log(ans);//Banana

let e = "Apple, Banana, Kiwi";
let ans = e.substr(7, 6);
console.ans(res);//Banana

let f = "Welcome to letsupgrade a cousre conducted by letsupgrade"
let txt = f.replace("letsupgrade","javascript");
console.log(txt);

var str = "     Hello World!     ";
console.log(str);

let fruits = ["Banana", "Orange", "Apple", "Mango"];
consol.log(fruits.join(" * "));

let fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];


let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("original array",fruits);
let removed = fruits.splice(2, 2, "Lemon", "Kiwi"); 
console.log("After splicing",fruits);
console.log("removed",removed);

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits);
var citrus = fruits.slice(3);
console.log(citrus);