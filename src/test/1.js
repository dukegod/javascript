var a = {n:1}
var b = a;
a.x = a
a = {n:2}

console.log(a) // {n:2}
console.log(a.x) // {n:2}
console.log(b)  // {n:1}
console.log(b.x) // undefined
