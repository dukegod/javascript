
function share(opt = {
  name: null
}) {
  const config = {
    name: 9888
  }

  if (opt.name === 9) {
    Object.assign(config, {
      age: 9
    })
  }


  console.log(config)
  return config
}


share({
  name: 9,
  age: 9,
});
