const calc = () => {
  return 4 * 7
}

const printCalc = callback => {
  console.log(callback())
}

printCalc(calc)
