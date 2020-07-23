const countTrue = arr => arr.reduce((a,v)=> (v) ?a+1:a,0)

countTrue([true, false, false, true, false])//?