const isNumeric = v => typeof v === 'number';
const isAlpha = v => typeof v === 'string';
const sortNumeric = (a,b) => a - b;
const sortNumbers = vals => vals.filter(isNumeric).sort(sortNumeric)
const sortAlpha = vals => vals.filter(isAlpha).sort()

function numThenChar(arrs){
    let values = [...sortNumbers(arrs.flat()), ...sortAlpha(arrs.flat())];
    return arrs.map(a => a.map(() => values.shift()))
}
numThenChar([[1, 2], [2.2, 3], [5, 6, 10, 14, 'V', 'a', 'd'], ['e', 'f'], ['h', 'p', 's', 'y'], ['z']])//?
