const maxTotal = arr => arr
.sort((a,b) => a - b)
.filter( ( _,idx) => idx > 4)
.reduce( (sum, n) => sum + n, 0)

maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1])//?
maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100])//?
maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])//?