const os = require('os');

let osInfo = {
  name,
  address,
}

// console.log(os);
console.log('networkInterfaces');
console.log(os.networkInterfaces().en9[1].address);