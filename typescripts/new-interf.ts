import {Person} from './interf';

interface personexface extends Person {
  address?: string;
}

class Personex implements personexface {
  name: string;
  address: string;

  constructor(address: string, name: string) {
    this.address = address;
    this.name= name;
  }
  showName() {
    console.log(this.name);
  }

  editName(name: string) {
    this.name = name;
  }
}

const per = new Personex('bj','9')
console.log(per.showName())

per.editName('8989')
console.log(per.showName())
