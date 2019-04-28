# Fetch

解决timeout 问题

```js
// Rough implementation. Untested.
function timeout(ms, promise) {
  return new Promise((resolve, reject) =>{
    setTimeout(()=> {
      reject(new Error("timeout"))
    }, ms)
    promise.then(resolve, reject)
  })
}

timeout(1000, fetch('/hello'))
.then((response) =>{
  // process response
}).catch((error)=> {
  // might be a timeout error
}).finally(() => {})
```
