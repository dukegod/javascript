const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('input ...', (answer)=>{
//   console.log(`you input....${answer}`);
//   rl.close();
// })

async function getInput() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return await new Promise((resolve, reject) => {
    rl.question('input ...', (answer)=>{
      console.log(`you input....${answer}`);
      rl.close();
      resolve(answer)
    })
  })
}

getInput().then((re)=>{
  console.log(re)
})
