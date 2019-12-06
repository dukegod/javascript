const p1 = () => {
  return Promise.resolve(1)
}
const p2 = () => {
  return Promise.reject(2)
}

const p3 = () => {
  throw new Error('error')
}

async function allFuncs () {
  try {
    const re1 = await p1()
    // const re2 = await p2()
    const re3 = await p3()
    console.log(re1);
    // console.log(re2);
    console.log(re3)
  } catch (error) {
    console.log(error)
  }
}

allFuncs()
