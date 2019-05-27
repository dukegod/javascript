/**
 *
 */

 const Obj = {
   x: 1
 }

 const proxy = new Proxy(Obj, {
   get(obj, prop) {
     console.log(obj);
     console.log(prop);
   },
   set(target, value,) {
     console.log(target,  value)
   }
 })

proxy.y = 23;
proxy.y = 24;
proxy.x = 23;
console.log(proxy.x)
