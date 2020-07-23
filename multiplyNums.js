const multiplyNums = str => str.split(',').reduce((a,v) => a* +v, 1)

multiplyNums("1, 2, 3, 4")//?