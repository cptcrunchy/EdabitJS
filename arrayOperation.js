const arrayOperation = (x,y,num) => [...Array(y-x+1)].map((_,i) => x+i).filter(n => n % num === 0)

arrayOperation(1, 10, 3)//?
arrayOperation(15, 20, 7)//?
arrayOperation(7, 9, 2)//?