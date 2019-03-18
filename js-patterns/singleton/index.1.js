const instanceMaker = (function () {
  let instance = null;

  class Instance {
    constructor() {
      this.name= 'instance'
    }
    getName() {
      return this.name
    }
    setName(name) {
      console.log(name);
      this.name = name
    }
  }

  if (!instance) {
    instance = new Instance()
  }
  return instance
})()


console.log(instanceMaker)
console.log(instanceMaker.getName('name'));

instanceMaker.setName('name333')
