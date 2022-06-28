class Car {
  constructor(doors, engine, color) {
    this.doors = doors
    this.engine = engine
    this.color = color
  }
}

class SUV extends Car {
  constructor(doors, engine, color) {
    super(doors, engine, color)
    this.wheels = 4
  }
}

const bmw = new Car(4, 'V8', 'brown')

const cx5 = new SUV(4, 'V9', 'white')

console.log(cx5)
