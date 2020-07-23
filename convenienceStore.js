const changeEnough = (change, amountDue) => {
    const sumOfChange = [change[0]/4, change[1]/10, change[2]/20, change[3]/100].reduce( (sum, val) => sum + val, 0)
    return sumOfChange >= amountDue
}

changeEnough([30, 40, 20, 5], 12.55)//?