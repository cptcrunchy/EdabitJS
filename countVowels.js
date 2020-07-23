const countVowels = str => [...str.matchAll(/[aeiou]/g)].length

countVowels("Celebration")//?