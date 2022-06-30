class Car {
  constructor(doors, engine, color) {
    this.doors = doors
    this.engine = engine
    this.color = color
  }
}

class carFactory {
  createCar(type) {
    switch (type) {
      case 'bmw':
        return new Car(4, 'V7', 'black')
      case 'cx5':
        return new Car(4, 'v3', 'red')
      default:
        break
    }
  }
}

const factory = new carFactory()
const bmw = factory.createCar('bmw')
const cx5 = factory.createCar('cx5')

console.log(bmw, cx5)
