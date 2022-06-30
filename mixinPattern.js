// mixin
let sayHiMixin = {
  sayHi() {
    alert(`Hello ${this.name}`)
  },
  sayBye() {
    alert(`Bye ${this.name}`)
  },
}

// usage:
class SystemUser {
  constructor(name) {
    this.name = name
  }
}

console.log(SystemUser.prototype)
// copy the methods
Object.assign(SystemUser.prototype, sayHiMixin)

// now SystemUser can say hi
new SystemUser('Dude').sayHi() // Hello Dude!
new SystemUser('Dude').sayBye()
