//const sevenBoom = arr => (arr.map(n => ""+n).filter(v => v.includes("7")).length >= 1) ? "Boom!" : 'there is no 7 in the array'
const sevenBoom = arr => /7/.test(arr) ? "Boom!" : 'there is no 7 in the array'


sevenBoom([8, 6, 33, 100])//?
sevenBoom([1, 2, 3, 4, 5, 6, 7])//?
sevenBoom([76, 55, 44, 32])//?