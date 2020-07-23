const numInStr = arr => arr.filter( el => /\d/.test(el))

numInStr(["abc", "ab10c", "a10bc", "bcd"])//?
numInStr(['1', 'a' , ' ' ,'b'])//?