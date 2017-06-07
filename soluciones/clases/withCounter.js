function withCounter(Constructor) {
  function Counted() {
     Counted._instanceCount++;
     return  new Constructor();
   }
 Counted._instanceCount = 0;
 Counted.getInstanceCount = function() {
   return Counted._instanceCount
 }
 return Counted;
}

class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log(`Come on, ${this.name}, let's go outside!`);
  }
}

const CountedDog = withCounter(Dog);

const pipa = new CountedDog();
console.log(CountedDog.getInstanceCount())

const spot = new CountedDog();
const toby = new CountedDog();
console.log(CountedDog.getInstanceCount())
